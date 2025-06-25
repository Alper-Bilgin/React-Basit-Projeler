# Çok Adımlı Form Uygulaması

Bu proje, React ve Vite kullanılarak geliştirilmiş, Formik ve Yup ile doğrulama yapılan çok adımlı (multi-step) bir form uygulamasıdır. Kullanıcıdan kişisel, demografik ve eğitim bilgileri adım adım alınır ve en sonunda özet olarak gösterilir.

## Özellikler

- 3 adımlı form: Kişisel Bilgiler, Demografik Bilgiler, Eğitim Bilgileri
- Her adımda alan doğrulama (Formik + Yup)
- Adımlar arası geçiş ve veri saklama
- Son adımda girilen bilgilerin özetlenmesi
- Modern ve kullanıcı dostu arayüz

## Kullanılan Teknolojiler

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)

## Kurulum ve Çalıştırma

1. **Depoyu klonlayın:**
   ```bash
   git clone <repo-url>
   cd 6_FormUygulaması
   ```
2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```
3. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```
4. Tarayıcınızda `http://localhost:5173` adresini açarak uygulamayı görüntüleyin.

## Form Adımları

1. **Kişisel Bilgiler**
   - Ad
   - Soyad
   - Cinsiyet
2. **Demografik Bilgiler**
   - Yaş
   - Doğum Tarihi
3. **Eğitim Bilgileri**
   - Okul
   - Bölüm
   - Mezuniyet Yılı

Her adımda eksik veya hatalı bilgi girildiğinde kullanıcıya uyarı gösterilir. Son adımda tüm bilgiler özetlenir.

## Lisans

Bu proje MIT lisansı ile lisanslanmıştır.

---

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
