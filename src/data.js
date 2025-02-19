const htmlSorulari = [
    {
      "question": "HTML nedir?",
      "answer": "HTML, web sayfalarının iskeletini oluşturan bir işaretleme dilidir.",
      "options": [
        "A) HTML, bir programlama dilidir.",
        "B) HTML, bir veritabanı yönetim sistemidir.",
        "C) HTML, bir işletim sistemidir.",
        "D) HTML, web sayfalarının iskeletini oluşturan bir işaretleme dilidir."
      ]
    },
    {
      "question": "HTML dosyaları hangi uzantıyla kaydedilir?",
      "answer": ".html",
      "options": [
        "A) .txt",
        "B) .js",
        "C) .css",
        "D) .html"
      ]
    },
    {
      "question": "Bir HTML belgesi hangi etiketle başlar?",
      "answer": "<!DOCTYPE html>",
      "options": [
        "A) <html>",
        "B) <head>",
        "C) <body>",
        "D) <!DOCTYPE html>"
      ]
    },
    {
      "question": "Bir HTML belgesinin başlık kısmını belirten etiket nedir?",
      "answer": "<head>",
      "options": [
        "A) <footer>",
        "B) <title>",
        "C) <main>",
        "D) <head>"
      ]
    },
    {
      "question": "HTML'de bir başlık oluşturmak için hangi etiket kullanılır?",
      "answer": "<h1> - <h6>",
      "options": [
        "A) <heading>",
        "B) <h1> - <h6>",
        "C) <header>",
        "D) <title>"
      ]
    },
    {
      "question": "Bir paragraf metni eklemek için hangi etiket kullanılır?",
      "answer": "<p>",
      "options": [
        "A) <div>",
        "B) <section>",
        "C) <p>",
        "D) <span>"
      ]
    },
    {
      "question": "Bir bağlantı (link) eklemek için hangi HTML etiketi kullanılır?",
      "answer": "<a>",
      "options": [
        "A) <link>",
        "B) <a>",
        "C) <url>",
        "D) <href>"
      ]
    },
    {
      "question": "HTML'de resim eklemek için hangi etiket kullanılır?",
      "answer": "<img>",
      "options": [
        "A) <picture>",
        "B) <image>",
        "C) <img>",
        "D) <media>"
      ]
    },
    {
      "question": "Bir liste elemanını göstermek için hangi etiket kullanılır?",
      "answer": "<li>",
      "options": [
        "A) <ul>",
        "B) <ol>",
        "C) <li>",
        "D) <list>"
      ]
    },
    {
      "question": "HTML'de tablo satırını temsil eden etiket nedir?",
      "answer": "<tr>",
      "options": [
        "A) <row>",
        "B) <td>",
        "C) <tr>",
        "D) <table>"
      ]
    }
  ];

  const cssSorulari =[
    {
      "question": "CSS nedir?",
      "answer": "CSS, web sayfalarının görünümünü (stilini) belirlemek için kullanılan bir dildir.",
      "options": [
        "A) CSS, web sayfalarının içeriklerini düzenler.",
        "B) CSS, web sayfalarının stilini belirler.",
        "C) CSS, web sayfalarının yapı taşlarını oluşturur.",
        "D) CSS, veritabanı işlemleri yapar."
      ]
    },
    {
      "question": "CSS'de stil eklemek için hangi etiket kullanılır?",
      "answer": "<style>",
      "options": [
        "A) <script>",
        "B) <link>",
        "C) <style>",
        "D) <css>"
      ]
    },
    {
      "question": "Bir CSS özelliği nasıl yazılır?",
      "answer": "Özellik: Değer;",
      "options": [
        "A) Özellik: Değer;",
        "B) Değer: Özellik;",
        "C) Özellik = Değer;",
        "D) Değer = Özellik;"
      ]
    },
    {
      "question": "CSS'de bir öğenin rengini değiştirmek için hangi özellik kullanılır?",
      "answer": "color",
      "options": [
        "A) background-color",
        "B) color",
        "C) font-color",
        "D) text-color"
      ]
    },
    {
      "question": "CSS'de bir öğenin arka plan rengini değiştirmek için hangi özellik kullanılır?",
      "answer": "background-color",
      "options": [
        "A) color",
        "B) font-color",
        "C) background-color",
        "D) text-color"
      ]
    },
    {
      "question": "CSS'de kenarlık (border) eklemek için hangi özellik kullanılır?",
      "answer": "border",
      "options": [
        "A) padding",
        "B) margin",
        "C) border",
        "D) spacing"
      ]
    },
    {
      "question": "CSS'de yazı tipi boyutunu ayarlamak için hangi özellik kullanılır?",
      "answer": "font-size",
      "options": [
        "A) text-size",
        "B) font-size",
        "C) font-weight",
        "D) font-style"
      ]
    },
    {
      "question": "CSS'de bir öğeyi ortalamak için hangi özellikler kullanılabilir?",
      "answer": "text-align ve margin",
      "options": [
        "A) display: block;",
        "B) text-align ve margin",
        "C) float",
        "D) position"
      ]
    },
    {
      "question": "CSS'de bir öğeye sabit bir genişlik vermek için hangi özellik kullanılır?",
      "answer": "width",
      "options": [
        "A) height",
        "B) padding",
        "C) width",
        "D) margin"
      ]
    },
    {
      "question": "CSS'de bir öğenin hizalanmasını değiştirmek için hangi özellik kullanılır?",
      "answer": "text-align",
      "options": [
        "A) justify-content",
        "B) text-align",
        "C) vertical-align",
        "D) align-items"
      ]
    }
  ];
  const jsSorulari =[
    {
      "question": "JavaScript nedir?",
      "answer": "JavaScript, web sayfalarına etkileşim eklemek için kullanılan bir programlama dilidir.",
      "options": [
        "A) JavaScript, bir web tasarım aracıdır.",
        "B) JavaScript, veritabanı yönetim sistemidir.",
        "C) JavaScript, web sayfalarına etkileşim eklemek için kullanılan bir programlama dilidir.",
        "D) JavaScript, web sayfalarının içeriğini düzenler."
      ]
    },
    {
      "question": "JavaScript'te bir değişken nasıl tanımlanır?",
      "answer": "let, const, var",
      "options": [
        "A) int, string",
        "B) var, let, const",
        "C) var, number",
        "D) define, let"
      ]
    },
    {
      "question": "JavaScript'te ekrana yazı yazdırmak için hangi fonksiyon kullanılır?",
      "answer": "console.log()",
      "options": [
        "A) print()",
        "B) echo()",
        "C) alert()",
        "D) console.log()"
      ]
    },
    {
      "question": "JavaScript'te bir fonksiyon nasıl tanımlanır?",
      "answer": "function fonksiyonAdi() { }",
      "options": [
        "A) def fonksiyonAdi() { }",
        "B) function fonksiyonAdi() { }",
        "C) function: fonksiyonAdi() { }",
        "D) func fonksiyonAdi() { }"
      ]
    },
    {
      "question": "JavaScript'te bir koşul ifadesi nasıl yazılır?",
      "answer": "if (koşul) { }",
      "options": [
        "A) if (koşul) { }",
        "B) if { koşul }",
        "C) if: koşul { }",
        "D) check (koşul) { }"
      ]
    },
    {
      "question": "JavaScript'te bir dizi nasıl tanımlanır?",
      "answer": "let dizi = []",
      "options": [
        "A) let dizi = {}",
        "B) let dizi = []",
        "C) var dizi = ()",
        "D) const dizi = {}"
      ]
    },
    {
      "question": "JavaScript'te bir döngü nasıl başlatılır?",
      "answer": "for (let i = 0; i < 5; i++) { }",
      "options": [
        "A) while (i < 5) { }",
        "B) for (let i = 0; i < 5; i++) { }",
        "C) loop (i < 5) { }",
        "D) each (i < 5) { }"
      ]
    },
    {
      "question": "JavaScript'te bir olay (event) nasıl tanımlanır?",
      "answer": "element.addEventListener('event', fonksiyon);",
      "options": [
        "A) element.addEvent('event', fonksiyon);",
        "B) element.addEventListener('event', fonksiyon);",
        "C) element.on('event', fonksiyon);",
        "D) element.add('event', fonksiyon);"
      ]
    },
    {
      "question": "JavaScript'te bir obje nasıl tanımlanır?",
      "answer": "let obje = { key: value };",
      "options": [
        "A) let obje = { key: value };",
        "B) var obje = [key: value];",
        "C) let obje = key: value;",
        "D) let obje = (key, value);"
      ]
    },
    {
      "question": "JavaScript'te bir stringin uzunluğunu nasıl alırsınız?",
      "answer": "string.length",
      "options": [
        "A) string.size",
        "B) string.count",
        "C) string.length",
        "D) string.length()"
      ]
    }
  ];