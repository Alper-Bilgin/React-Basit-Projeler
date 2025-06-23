# ⚛️ **React ile Hafıza Oyunu**

## **App.js:**

### 1. **`defaultCards` Tanımlaması:**

```jsx
const defaultCards = [
  {
    path: "/img/ananas.png",
    matched: false,
  },
  {
    path: "/img/cilek.png",
    matched: false,
  },
  {
    path: "/img/karpuz.png",
    matched: false,
  },
  {
    path: "/img/muz.png",
    matched: false,
  },
  {
    path: "/img/nar.png",
    matched: false,
  },
  {
    path: "/img/uzum.png",
    matched: false,
  },
];
```

Bu array (`defaultCards`), oyun için kullanılacak kartların verilerini içeriyor. Her kartın iki özelliği var:

- `path`: Kartın görselinin yolu.

- `matched`: Kartın eşleşip eşleşmediğini belirtir, başlangıçta `false` (eşleşmemiş) olarak ayarlanmış.

### 2. **useState ile Durum Tanımlamaları:**

```jsx
const [cards, setCards] = useState([]);
const [selectedOne, setSelectedOne] = useState(null);
const [selectedTwo, setSelectedTwo] = useState(null);
const [disabled, setDisabled] = useState(false);
const [time, setTime] = useState(0);
const [moves, setMoves] = useState(0);
```

- `cards`: Oyun sırasında kartların tutulduğu durum. Başlangıçta boş bir dizi (`[]`).
- `selectedOne` ve `selectedTwo`: Seçilen kartları tutar. Bu, kartların eşleşip eşleşmediğini kontrol etmek için kullanılır.
- `disabled`: Kartların seçilmesi engellenip engellenmediğini kontrol eden bir bayrak. Kart seçildiğinde `true` olur, aksi takdirde `false` kalır.
- `time`: Zamanı tutan durum. Oyunun süresi arttıkça bu değer artar.
- `moves`: Kullanıcının yaptığı toplam hamle sayısı.

### 3. **Kartların Hazırlanması (prepareCards):**

```jsx
const prepareCards = () => {
  const sortedCards = [...defaultCards, ...defaultCards]
    .sort(() => 0.5 - Math.random()) // Kartları rastgele karıştırma
    .map((card) => ({ ...card, id: Math.random() }));
  // Her karta benzersiz id ekleme

  setCards(sortedCards); // Yeni kartları duruma ekleyin
  resetState(); // Seçilen kartları sıfırlayın
  setTime(0); // Zamanı sıfırlayın
  setMoves(0); // Hamle sayısını sıfırlayın
};
```

- Bu fonksiyon, kartları hazırlamak için kullanılır.
- İlk olarak `defaultCards` dizisini iki kez kopyalar ve her kartı rastgele karıştırır.
- Kartların her birine benzersiz bir `id` atar (yeni `id`'ler, `Math.random()` ile oluşturulur).
- Kartlar karıştırıldıktan sonra, `setCards` fonksiyonu ile kartlar güncellenir.
- Ardından oyun durumu sıfırlanır: seçilen kartlar (`selectedOne`, `selectedTwo`), zaman (`time`), ve hamle sayısı (`moves`).

### 4. **Kart Seçimi (handleSelected):**

```jsx
const handleSelected = (card) => {
  if (!disabled) {
    setMoves((prev) => prev + 1); // Hamle sayısını artır
    selectedOne ? setSelectedTwo(card) : setSelectedOne(card); // Eğer bir kart seçilmişse, ikinciyi seç
  }
};
```

- Bu fonksiyon, bir kart tıklanıp seçildiğinde çalışır.
- Eğer kartlar zaten tıklanabilir (yani `disabled` değilse), hamle sayısı bir artırılır.
- Eğer bir kart zaten seçildiyse (`selectedOne`), ikinci kartı (`selectedTwo`) seçer, aksi takdirde ilk kartı seçer.

### 5. **Kartların Eşleşmesini Kontrol Etme (useEffect):**

```jsx
useEffect(() => {
  if (selectedOne && selectedTwo) {
    setDisabled(true);
    // Kartlar seçildiyse, diğer kartları seçilemez yap

    if (selectedOne.path === selectedTwo.path) {
      setCards((prev) => {
        return prev.map((card) => {
          if (card.path === selectedOne.path) {
            return { ...card, matched: true };
            // Eşleşen kartları matched olarak işaretle
          } else {
            return card;
          }
        });
      });
      resetState(); // Seçilen kartları sıfırla
    } else {
      setTimeout(() => {
        resetState(); // Eşleşmediyse, kartları yeniden kapat
      }, 1000);
    }
  }
}, [selectedOne, selectedTwo]);
```

- Bu `useEffect`, iki kart seçildiğinde devreye girer ve kartların eşleşip eşleşmediğini kontrol eder.
- Eğer kartlar eşleşirse, her iki kartın `matched` özelliğini `true` olarak ayarlar.
- Eşleşmezlerse, 1 saniye sonra kartlar geri kapatılır.
- `setDisabled(true)` ile kartlar seçilemez hale gelir.

### 6. **Zamanlayıcı (useEffect):**

```jsx
useEffect(() => {
  if (cards.length > 0 && !cards.some((card) => !card.matched)) {
    return;
    // Eğer oyun bitmişse (tüm kartlar eşleşmişse), zamanlayıcıyı durdur
  }

  const timer = setInterval(() => {
    setTime((prevTime) => prevTime + 1); // Zamanı her saniye artır
  }, 1000);

  return () => clearInterval(timer);
  // Bileşen unmonted olduğunda zamanlayıcıyı temizle
}, [cards]); // Kartlar değiştiğinde bu effect çalışacak
```

- Bu `useEffect`, oyun başladığında zamanlayıcıyı başlatır.
- Eğer oyun bitmediyse, her saniye `time` değerini artırır.
- Eğer oyun bittiğinde (tüm kartlar eşleştiğinde), zamanlayıcı durdurulur.

### 7. **Oyun Bitti Kontrolü (isGameFinished):**

```jsx
const isGameFinished = cards.every((card) => card.matched);
```

- Oyun bitmişse, tüm kartlar eşleşmiş olmalıdır. Bu satır, tüm kartlar eşleştiğinde `true` döner, aksi takdirde `false` döner.

### 8. **Render:**

```jsx
return (
  <section className="flex flex-col items-center justify-center gap-5 mt-10">
    <h1 className="text-3xl font-semibold text-center">Tahmin Etme Oyunu</h1>
    <button className="bg-[#00ADB5] px-3 py-2 rounded hover:-translate-y-1 transition-all" onClick={() => prepareCards()}>
      Oyunu Başlat
    </button>

    <div className="mt-5 text-xl">
      <p>Zaman: {time}s</p>
      <p>Hamleler:{moves / 2}</p>
    </div>

    {isGameFinished && <div className="text-2xl font-bold text-green-400 mt-4">Tebrikler, tüm kartları eşleştirdiniz!</div>}

    <div className="grid grid-cols-4 gap-2 mt-10">
      {cards.map((card, ind) => (
        <Card card={card} key={ind} handleSelected={handleSelected} disabled={disabled} rotated={card === selectedOne || card === selectedTwo || card.matched} />
      ))}
    </div>
  </section>
);
```

- Burada, oyun arayüzü render edilir.

- **Başlat butonu**: Oyun sıfırlanır ve kartlar yeniden hazırlanır.

- **Zaman ve hamleler**: Oyun süresi ve hamle sayısı ekranda gösterilir.

- **Kazanan mesajı**: Eğer oyun bitmişse, "Tebrikler" mesajı görünür.

- **Kartlar**: `cards` dizisi üzerinden döngüye girilir ve her kart için `Card` bileşeni render edilir.

---

## **Card.js:**

### 1. **Kart Bileşeni:**

```jsx
const Card = ({ card, handleSelected, rotated, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleSelected(card); // Kart seçildiğinde handleSelected çağrılır
    }
  };

  return (
    <div className="w-[200px] card">
      <div className={rotated ? "rotated" : ""}>
        <img className="front" src={card.path} alt="Card front" />
        <img className="back" onClick={handleClick} src="/img/kapak.png" />
      </div>
    </div>
  );
};
```

- **Card** bileşeni, her kartı temsil eder.
- `rotated`: Bu prop, kartın dönüp dönmeyeceğini kontrol eder (yani, kartın ön yüzü görünür olup olmadığı için bayrak).
- `disabled`: Kartın tıklanıp tıklanamayacağını kontrol eder.
- `handleClick`: Kart tıklandığında, `handleSelected` fonksiyonu çağrılır.

---

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
