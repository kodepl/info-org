---
title: "Co wychodzi z przeglądarki przy jednym otwarciu artykułu"
description: "Jakie dane są wysyłane przy otwarciu artykułu w przeglądarce?"
pubDate: "2026-09-22"
author: "Paweł Kruk"
authorBio: "Redaktor dyżurny. Skraca fakty, nie dokłada narracji."
kicker: "Cyfrowe"
category: "Informacje"
tags: ["prywatność", "tracker", "cookies"]
readingTime: "4 min"
image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&h=900&q=80"
---

## Co się dzieje, gdy klikasz w artykuł?

Przy otwarciu artykułu w przeglądarce, natychmiast wysyłane jest żądanie HTTP do zewnętrznego serwisu. To właśnie wtedy aktywuje się tracker, który ma na celu odnotowanie wizyty. Cała procedura wygląda z pozoru prosto, lecz kryje w sobie sporo szczegółów, które często umykają uwadze użytkowników.

### Jakie dane są przekazywane?

1. **IP i user-agent** ,  przeglądarka automatycznie dołącza te informacje. Dzięki nim zewnętrzny serwis może zlokalizować użytkownika oraz rozpoznać typ urządzenia.
2. **Adres artykułu** ,  tracker zazwyczaj rejestruje URL aktualnie otwieranej strony. Przydaje się to do analizy ruchu na stronie.
3. **Referrer** ,  to informacja o stronie, z której użytkownik przeszedł do artykułu. 
4. **Nazwa zdarzenia** ,  zwykle jest to "page_view", co wskazuje na to, że użytkownik otworzył stronę.
5. **Identyfikator** ,  unikalny numer, który często jest przechowywany w ciasteczkach (_ga dla Google Analytics, _fbp dla Meta). Może też być zapisany w localStorage, co sprawia, że lista cookies pozostaje pusta, a identyfikator nadal powraca w parametrach.

### Przykład żądania

Przykładowe żądanie może wyglądać następująco: `https://collect.example.invalid/g/collect?dl=adresartykułu&dr=referrer&en=page_view&cid=identyfikator`. Przy pierwszym wejściu często zakładany jest nowy identyfikator, który towarzyszy użytkownikowi podczas kolejnych wizyt na tej samej domenie.

### Co nie jest zbierane?

Warto zaznaczyć, że w żądaniu nie ma przesyłanych treści artykułu, haseł, ani żadnych plików z lokalnego dysku. Oznacza to, że prywatne informacje użytkownika nie są automatycznie wysyłane do zewnętrznych serwisów.

Często spotykanym zjawiskiem jest również to, że baner zgody na cookies pojawia się z opóźnieniem. Żądanie do trackera może zostać wysłane jeszcze przed kliknięciem "Akceptuję". Zamknięcie banera nie cofa wcześniejszego żądania.

### Geolokalizacja i jej niedoskonałości

Geolokalizacja oparta na IP jest niezwykle zawodna. Miasto, jakie wskazuje, często mija się z prawdą, co wynika z ograniczeń technologicznych i baz danych.

Przed kliknięciem na jakikolwiek baner dotyczący zgody na cookies, warto sprawdzić informacje w oknie prywatnym przeglądarki. W zakładce Sieć można zobaczyć wszystkie żądania do obcych domen oraz ścieżki takie jak collect, pixel czy g/collect.

Przy analizie danych, które są zbierane, istotne jest, aby być świadomym, co tak naprawdę wysyłane jest przy każdej wizycie. Więcej informacji na ten temat można znaleźć w artykule [co zbiera tracker przy wizycie](https://www.blackweb.pl/blog/co-tracker-wysyla-przy-jednym-wejscie). 

, wchodząc na artykuł, przesyłane są jedynie podstawowe informacje o użytkowniku i stronie, a nie jego osobiste dane czy treści.
