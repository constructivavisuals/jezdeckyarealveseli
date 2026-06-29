# Fotky areálu

Sem nahraj fotky areálu. Dokud tu nejsou, web zobrazuje elegantní placeholdery.

## Jak fotku přidat

1. Nahraj soubor do této složky (`public/images/`), např. `hero.jpg`.
2. V komponentě doplň atribut `src`:

### Hero (úvodní fotka) — `components/Hero.tsx`
```tsx
<Photo alt="Jezdecký areál Vysoké Veselí" src="/images/hero.jpg" priority />
```

### Ustájení / Ubytování — `app/page.tsx`
U `<SplitSection ...>` doplň `imageSrc="/images/stable.jpg"` (resp. `ubytovani.jpg`).

### Galerie — `components/Gallery.tsx`
U položek v poli `items` doplň `src: "/images/galerie-1.jpg"` atd.

## Doporučení
- Formát: JPG nebo WebP, na šířku (landscape), ideálně 2000–2560 px na šířku
- Hero: vodorovná fotka celého areálu (klidně z dronu), spíš podvečerní/zlaté světlo
- Vyhni se přesvětleným/tmavým snímkům — sjednocené, klidné barvy působí prémiově
