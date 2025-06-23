# ⚛️ React ile Hafıza Oyunu

### **Projenin Yapısı:**

1.  **Ana Bileşen (`App.js`):**

    - Bu, oyunun ana mantığını yöneten bileşendir.

    - Kullanıcı etkileşimleri ve oyun durumu burada yönetilir.

    - `Card` bileşeni, her bir kartı temsil eder.

2.  **Kart Bileşeni (`Card.js`):**

    - Her kartı bir bileşen olarak temsil eder.

    - Kartın görseli, kartın ön yüzü (resmi) ve arka yüzü (kapak) olarak iki ayrı `img` etiketi içerir.

    - Kartlar dönme animasyonlarıyla kapalı ya da açık olurlar.

3.  **CSS/Tailwind Stili:**

    - **TailwindCSS** ile stil oluşturulmuş. `@import "tailwindcss";` satırı, TailwindCSS stil kütüphanesini projenize dahil eder.

    - Kartların dönüşüm animasyonları için CSS kullanılır.

    - Arka plan rengi ve metin renkleri gibi temel stil ayarları burada tanımlanmıştır.

---

### **Ana İşlevsellik:**

#### **1. Kartların Hazırlanması:**

- `prepareCards()` fonksiyonu, oyun başladığında kartları hazırlamak için kullanılır. Bu fonksiyon:

  - `defaultCards` dizisindeki kartları alır ve her kartı iki kez (eşleşen kartlar için) ekler.

  - Kartlar rastgele sıralanır ve her kart bir `id` ile benzersiz hale getirilir.

  - Bu kartlar, `setCards` fonksiyonu ile `cards` durumuna atanır.

  - Oyun sıfırlanır, zaman ve hamle sayısı sıfırlanır.

#### **2. Kart Seçme ve Eşleştirme:**

- **Kart Seçimi:**

  - Her kart tıklandığında `handleSelected` fonksiyonu çağrılır.

  - Bu fonksiyon, seçilen kartları iki ayrı değişkende (`selectedOne` ve `selectedTwo`) tutar.

  - Eğer iki kart seçildiyse ve bunlar eşleşirse, kartlar `matched` olarak işaretlenir (eşleşmiş kabul edilir).

  - Eğer eşleşmezse, 1 saniye sonra kartlar yeniden kapalı hale gelir.

#### **3. Zaman ve Hamleler:**

- **Zaman:**

  - `useEffect` ile bir zamanlayıcı başlatılır. Oyun başladığında, her saniye `setTime` fonksiyonu ile zaman arttırılır.

  - Oyun bittiğinde, zamanlayıcı durdurulmaz, ancak oyun bitişi kontrol edilerek sadece aktif kartlar gösterilir.

- **Hamleler:**

  - Kullanıcı her iki kartı seçtiğinde, bu bir hamle olarak kabul edilir. Bu hamle sayısı, `setMoves` fonksiyonu ile güncellenir.

  - Hamle sayısı her iki kart seçildiğinde 1 artar, ancak her eşleşme sonrası iki kart bir arada sayıldığından, toplam hamle sayısı `/ 2` ile gösterilir.

#### **4. Oyun Bittiğinde Gösterimler:**

- Eğer tüm kartlar eşleşirse (`isGameFinished`), ekranda "Tebrikler, tüm kartları eşleştirdiniz!" mesajı gösterilir.

---

### **Card Bileşeni (`Card.js`):**

- **Kartın Yapısı:**

  - Her kart, iki yüzü olan bir `div` içinde yer alır:

    - **Ön Yüz (`front`)**: Kartın resmi (`card.path`) burada görüntülenir.

    - **Arka Yüz (`back`)**: Kartın kapak resmi burada yer alır, bu genellikle oyun başladığında görünür.

  - `rotated` prop'u, kartın ön yüzünün görünüp görünmeyeceğini kontrol eder. Eğer `rotated` true ise, kart ön yüzü döner.

  - Kart tıklanabilir olduğunda, `handleClick` fonksiyonu çağrılır ve kart seçilir.

---

## **Genel Akış:**

1.  **Oyun Başlatıldığında:** `prepareCards` fonksiyonu çağrılır ve kartlar rastgele sıralanır.

2.  **Kartlar Seçildiğinde:** Kullanıcı kart seçtikçe, iki kart birbiriyle eşleşmeye çalışır.

3.  **Eşleşen Kartlar:** Eğer kartlar eşleşirse, `matched` durumu `true` olarak ayarlanır.

4.  **Zaman ve Hamleler:** Zamanlayıcı her saniye çalışır ve hamleler sayılır.

5.  **Oyun Bittiğinde:** Tüm kartlar eşleştiğinde, "Tebrikler" mesajı gösterilir.

---

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
