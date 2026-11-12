export interface SareeItem {
  id: string;
  name: string;
  subtitle: string;
  category: 'silk' | 'half' | 'blouse-full' | 'blouse-half' | 'checked' | 'zari';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  fabric: string;
  zariType: string;
  weaveTime: string;
  color: string;
  colorHex: string;
  frontImage: string;
  backImage: string;
  description: string;
  tag?: string;
}

export interface MoodItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
  description: string;
  accentColor: string;
}

export interface AccessoryPiece {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

export interface StyledLook {
  id: string;
  number: string;
  title: string;
  colorTheme: string;
  description: string;
  modelImage: string;
  saree: {
    brand: string;
    name: string;
    price: number;
    image: string;
  };
  blouse: {
    brand: string;
    name: string;
    price: number;
    image: string;
  };
  choker: {
    brand: string;
    name: string;
    price: number;
    image: string;
  };
  jhumkas: {
    brand: string;
    name: string;
    price: number;
    image: string;
  };
  ottiyanam: {
    brand: string;
    name: string;
    price: number;
    image: string;
  };
  bangles: {
    brand: string;
    name: string;
    price: number;
    image: string;
  };
}

export interface PickSilkCard {
  id: string;
  title: string;
  tagline: string;
  colorName: string;
  colorBg: string;
  price: number;
  image: string;
  motif: string;
}

export interface ReelItem {
  id: string;
  number: string;
  duration: string;
  fabricType: string;
  title: string;
  location: string;
  thumbnail: string;
  previewColor: string;
  description: string;
  drapeStyle: string;
}

export interface BridalSaree {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  image: string;
  zariNote: string;
  palluDetail: string;
  tag: string;
  auspiciousTime: string;
}

// 1. SIX MOODS (Exact 6 from 02-six-moods.png)
export const SIX_MOODS: MoodItem[] = [
  {
    id: 'wedding-edit',
    title: 'WEDDING EDIT',
    subtitle: 'Sacred Muhurtham Weaves',
    tag: 'Pure Gold Zari',
    image: '/assets/clean_mood_1.png',
    description: 'Crimson and vermilion drapes woven with electroplated 24kt gold zari threads for the sacred ceremony.',
    accentColor: '#8B1E2F'
  },
  {
    id: 'kanchipuram-icons',
    title: 'KANCHIPURAM ICONS',
    subtitle: 'Historic Korvai Weaves',
    tag: 'Temple Vault Edition',
    image: '/assets/clean_mood_2.png',
    description: 'Heavy silk body with interlocking temple spires (thazhampoo reku) woven on 3-shuttle pit looms.',
    accentColor: '#C59A27'
  },
  {
    id: 'radiance-zari',
    title: 'RADIANCE ZARI',
    subtitle: 'Molten Gold Brocades',
    tag: 'Master Artisan Series',
    image: '/assets/clean_mood_3.png',
    description: 'Centuries-old jaal patterns with intricate meenakari detailing in resplendent mulberry silk.',
    accentColor: '#B8860B'
  },
  {
    id: 'bridal-elan',
    title: 'BRIDAL ELAN',
    subtitle: 'Auspicious Heritage Drapes',
    tag: 'Muhurtham Collection',
    image: '/assets/clean_mood_4.png',
    description: 'Featuring auspicious Yaali, Mayil (peacock), and Rudraksha motifs passed down through generations.',
    accentColor: '#900C3F'
  },
  {
    id: 'banarasi-heirlooms',
    title: 'BANARASI HEIRLOOMS',
    subtitle: 'Antique Kadwa Brocades',
    tag: 'Royal Palace Edition',
    image: '/assets/clean_mood_5.png',
    description: 'Pistachio, champagne, and blush silks woven with subtle liquid-silver water zari.',
    accentColor: '#581845'
  },
  {
    id: 'festive-signatures',
    title: 'FESTIVE SIGNATURES',
    subtitle: 'Heirloom Celebration Silks',
    tag: 'Collector Weave',
    image: '/assets/clean_mood_6.png',
    description: 'Dense architectural brocades woven with genuine raw unboiled silk and pure silver threads.',
    accentColor: '#6B1724'
  }
];

// 2. TRY THE LOOK: 8 LOOKS WITH EXACT 03-try-the-look.png TROUSSEAU BREAKDOWN
export const STYLED_LOOKS: StyledLook[] = [
  {
    id: 'look-1',
    number: '1 of 8',
    title: 'Ivory Elephant',
    colorTheme: 'Ivory Cream & Antique Gold',
    description: 'Regal south Indian wedding styling centered on raw katan silk paired with 22kt temple jewelry.',
    modelImage: '/assets/clean_try_look_model.png',
    saree: {
      brand: 'NOOLAM — SAREE',
      name: 'Ivory Kanjivaram with Elephant Border',
      price: 82000,
      image: '/assets/thumb_saree.png'
    },
    blouse: {
      brand: 'NOOLAM — BLOUSE',
      name: 'Dusty Rose Silk Blouse',
      price: 14200,
      image: '/assets/thumb_blouse.png'
    },
    choker: {
      brand: 'NOOLAM — CHOKER',
      name: 'Pink Stone Temple Choker',
      price: 8400,
      image: '/assets/thumb_choker.png'
    },
    jhumkas: {
      brand: 'NOOLAM — JHUMKAS',
      name: 'Jhumkas with Pearl Drops',
      price: 11600,
      image: '/assets/thumb_jhumkas.png'
    },
    ottiyanam: {
      brand: 'NOOLAM — OTTIYANAM',
      name: 'Elephant Motif Ottiyanam',
      price: 15000,
      image: '/assets/thumb_ottiyanam.png'
    },
    bangles: {
      brand: 'NOOLAM — BANGLES',
      name: 'Gold and Dusty Rose Bangle Stack',
      price: 9800,
      image: '/assets/thumb_bangles.png'
    }
  },
  {
    id: 'look-2',
    number: '2 of 8',
    title: 'Mayil Sapphire',
    colorTheme: 'Peacock Blue & Magenta Korvai',
    description: 'Vibrant peacock plumage blue with heavy korvai magenta border and contrasting polki collar.',
    modelImage: '/assets/exact_silk_card_1.png',
    saree: {
      brand: 'NOOLAM — SAREE',
      name: 'Mayil Sapphire Korvai Silk Saree',
      price: 89800,
      image: '/assets/exact_silk_card_1.png'
    },
    blouse: {
      brand: 'NOOLAM — BLOUSE',
      name: 'Magenta Raw Silk Brocade Blouse',
      price: 15200,
      image: '/assets/exact_blouse_detail_center.png'
    },
    choker: {
      brand: 'NOOLAM — CHOKER',
      name: 'Kundan Peacock Collar Choker',
      price: 12500,
      image: '/assets/exact_mood_2.png'
    },
    jhumkas: {
      brand: 'NOOLAM — JHUMKAS',
      name: 'Sapphire & Pearl Chandbali Drops',
      price: 9500,
      image: '/assets/exact_mood_5.png'
    },
    ottiyanam: {
      brand: 'NOOLAM — OTTIYANAM',
      name: 'Peacock Motif Carved Waist Belt',
      price: 18000,
      image: '/assets/exact_mood_1.png'
    },
    bangles: {
      brand: 'NOOLAM — BANGLES',
      name: 'Dual Tone Gold Kangan Stack',
      price: 11400,
      image: '/assets/exact_mood_6.png'
    }
  },
  {
    id: 'look-3',
    number: '3 of 8',
    title: 'Rani Kalyanam',
    colorTheme: 'Auspicious Magenta & Pure Gold',
    description: 'The quintessential Tamil muhurtham drape with pure silver dipped in 24k gold zari.',
    modelImage: '/assets/exact_silk_card_2.png',
    saree: {
      brand: 'NOOLAM — SAREE',
      name: 'Kalyana Rani Magenta Silk Saree',
      price: 94600,
      image: '/assets/exact_silk_card_2.png'
    },
    blouse: {
      brand: 'NOOLAM — BLOUSE',
      name: 'Deep Crimson Velvet Blouse',
      price: 16500,
      image: '/assets/exact_blouse_detail_center.png'
    },
    choker: {
      brand: 'NOOLAM — CHOKER',
      name: 'Padakkam Ruby Temple Choker',
      price: 14000,
      image: '/assets/exact_mood_3.png'
    },
    jhumkas: {
      brand: 'NOOLAM — JHUMKAS',
      name: 'Tiered Heritage Temple Jhumkas',
      price: 11000,
      image: '/assets/exact_mood_4.png'
    },
    ottiyanam: {
      brand: 'NOOLAM — OTTIYANAM',
      name: 'Royal Kamarbandh in Kemp Stones',
      price: 19500,
      image: '/assets/exact_mood_2.png'
    },
    bangles: {
      brand: 'NOOLAM — BANGLES',
      name: 'Gajra Valayal in Gold & Emerald',
      price: 12500,
      image: '/assets/exact_mood_1.png'
    }
  },
  {
    id: 'look-4',
    number: '4 of 8',
    title: 'Emerald Gopuram',
    colorTheme: 'Forest Green & Deep Gold',
    description: 'Deep sacred green echoing temple sanctums with pure gold yaali border work.',
    modelImage: '/assets/exact_silk_card_3.png',
    saree: {
      brand: 'NOOLAM — SAREE',
      name: 'Kanchi Emerald Yaali Saree',
      price: 82400,
      image: '/assets/exact_silk_card_3.png'
    },
    blouse: {
      brand: 'NOOLAM — BLOUSE',
      name: 'Tissue Gold Silk Blouse',
      price: 13800,
      image: '/assets/exact_blouse_detail_center.png'
    },
    choker: {
      brand: 'NOOLAM — CHOKER',
      name: 'Emerald Slice Heritage Haram',
      price: 11500,
      image: '/assets/exact_mood_4.png'
    },
    jhumkas: {
      brand: 'NOOLAM — JHUMKAS',
      name: 'Temple Bell Ear Drops',
      price: 8900,
      image: '/assets/exact_mood_1.png'
    },
    ottiyanam: {
      brand: 'NOOLAM — OTTIYANAM',
      name: 'Gopuram Ingot Waist Belt',
      price: 16500,
      image: '/assets/exact_mood_5.png'
    },
    bangles: {
      brand: 'NOOLAM — BANGLES',
      name: 'Traditional Kada Bangles',
      price: 10800,
      image: '/assets/exact_mood_2.png'
    }
  },
  {
    id: 'look-5',
    number: '5 of 8',
    title: 'Manjal Sunshine',
    colorTheme: 'Golden Marigold & Vermilion',
    description: 'A radiant auspicious yellow drape designed for Mangalasnanam and morning pujas.',
    modelImage: '/assets/exact_silk_card_4.png',
    saree: {
      brand: 'NOOLAM — SAREE',
      name: 'Manjal Rudraksha Zari Saree',
      price: 78600,
      image: '/assets/exact_silk_card_4.png'
    },
    blouse: {
      brand: 'NOOLAM — BLOUSE',
      name: 'Vermilion Silk Thread Blouse',
      price: 12500,
      image: '/assets/exact_blouse_detail_center.png'
    },
    choker: {
      brand: 'NOOLAM — CHOKER',
      name: 'Kundan Floral Collar Choker',
      price: 10500,
      image: '/assets/exact_mood_5.png'
    },
    jhumkas: {
      brand: 'NOOLAM — JHUMKAS',
      name: 'Marigold Drop Earrings',
      price: 8200,
      image: '/assets/exact_mood_6.png'
    },
    ottiyanam: {
      brand: 'NOOLAM — OTTIYANAM',
      name: 'Slim Gold Link Ottiyanam',
      price: 15500,
      image: '/assets/exact_mood_3.png'
    },
    bangles: {
      brand: 'NOOLAM — BANGLES',
      name: 'Gold Filigree Choodiyan Stack',
      price: 9900,
      image: '/assets/exact_mood_4.png'
    }
  },
  {
    id: 'look-6',
    number: '6 of 8',
    title: 'Vennila Pastel Lilac',
    colorTheme: 'Soft Amethyst & Liquid Silver',
    description: 'A contemporary aristocratic pastel weave with rare silver electroplated threadwork.',
    modelImage: '/assets/exact_silk_card_5.png',
    saree: {
      brand: 'NOOLAM — SAREE',
      name: 'Vennila Pastel Lilac Silk',
      price: 86500,
      image: '/assets/exact_silk_card_5.png'
    },
    blouse: {
      brand: 'NOOLAM — BLOUSE',
      name: 'Pearl Scattered Organza Blouse',
      price: 14000,
      image: '/assets/exact_blouse_detail_center.png'
    },
    choker: {
      brand: 'NOOLAM — CHOKER',
      name: 'Gutta Pusalu Basra Pearl Choker',
      price: 13500,
      image: '/assets/exact_mood_6.png'
    },
    jhumkas: {
      brand: 'NOOLAM — JHUMKAS',
      name: 'Basra Pearl Tassel Drops',
      price: 9800,
      image: '/assets/exact_mood_2.png'
    },
    ottiyanam: {
      brand: 'NOOLAM — OTTIYANAM',
      name: 'Silver-Gold Plated Waist Chain',
      price: 17500,
      image: '/assets/exact_mood_1.png'
    },
    bangles: {
      brand: 'NOOLAM — BANGLES',
      name: 'Diamond Cut Pearl Bangles',
      price: 10800,
      image: '/assets/exact_mood_5.png'
    }
  },
  {
    id: 'look-7',
    number: '7 of 8',
    title: 'Ivory Elephant',
    colorTheme: 'Ivory Cream & Antique Gold',
    description: 'Eight looks, styled head to toe. Tap a look to see the pieces.',
    modelImage: '/assets/clean_try_look_model.png',
    saree: {
      brand: 'NOOLAM — SAREE',
      name: 'Ivory Kanjivaram with Elephant Border',
      price: 82000,
      image: '/assets/thumb_saree.png'
    },
    blouse: {
      brand: 'NOOLAM — BLOUSE',
      name: 'Dusty Rose Silk Blouse',
      price: 14200,
      image: '/assets/thumb_blouse.png'
    },
    choker: {
      brand: 'NOOLAM — CHOKER',
      name: 'Pink Stone Temple Choker',
      price: 8400,
      image: '/assets/thumb_choker.png'
    },
    jhumkas: {
      brand: 'NOOLAM — JHUMKAS',
      name: 'Jhumkas with Pearl Drops',
      price: 11600,
      image: '/assets/thumb_jhumkas.png'
    },
    ottiyanam: {
      brand: 'NOOLAM — OTTIYANAM',
      name: 'Elephant Motif Ottiyanam',
      price: 15000,
      image: '/assets/thumb_ottiyanam.png'
    },
    bangles: {
      brand: 'NOOLAM — BANGLES',
      name: 'Gold and Dusty Rose Bangle Stack',
      price: 9800,
      image: '/assets/thumb_bangles.png'
    }
  },
  {
    id: 'look-8',
    number: '8 of 8',
    title: 'Sengal Red Temple',
    colorTheme: 'Temple Brick Red & Pure Brocade',
    description: 'Heavy 850-gram pure mulberry silk with rich solid gold brocade pallu and body buttas.',
    modelImage: '/assets/exact_try_look_model.png',
    saree: {
      brand: 'NOOLAM — SAREE',
      name: 'Sengal Red Temple Arch Saree',
      price: 91000,
      image: '/assets/exact_saree_detail_center.png'
    },
    blouse: {
      brand: 'NOOLAM — BLOUSE',
      name: 'Heavy Aari Work Crimson Blouse',
      price: 15800,
      image: '/assets/exact_blouse_detail_center.png'
    },
    choker: {
      brand: 'NOOLAM — CHOKER',
      name: 'Navaratna Traditional Choker',
      price: 14500,
      image: '/assets/exact_mood_1.png'
    },
    jhumkas: {
      brand: 'NOOLAM — JHUMKAS',
      name: 'Peacock Carved Jhumkas',
      price: 10500,
      image: '/assets/exact_mood_3.png'
    },
    ottiyanam: {
      brand: 'NOOLAM — OTTIYANAM',
      name: 'Goddess Lakshmi Carved Belt',
      price: 18500,
      image: '/assets/exact_mood_4.png'
    },
    bangles: {
      brand: 'NOOLAM — BANGLES',
      name: 'Temple Coin Bangles (Set of 6)',
      price: 11800,
      image: '/assets/exact_mood_2.png'
    }
  }
];

// 3. PICK A SILK: FANNED ARC CARDS (Matching 04-pick-a-silk.png)
export const PICK_SILK_CARDS: PickSilkCard[] = [
  {
    id: 'palace-check',
    title: 'PALACE CHECK',
    tagline: 'Koorainadu Geometric Grid',
    colorName: 'Royal Maroon & Mustardy Zari',
    colorBg: '#5A121F',
    price: 89800,
    image: '/assets/exact_silk_card_1.png',
    motif: 'Gandaberunda & Checkered Loom'
  },
  {
    id: 'bengal-garden',
    title: 'BENGAL GARDEN',
    tagline: 'Muted Floral Brocade Weave',
    colorName: 'Moss Forest & Antique Gold',
    colorBg: '#1C3829',
    price: 94600,
    image: '/assets/exact_silk_card_2.png',
    motif: 'Lotus Creeper & Meenakari'
  },
  {
    id: 'kanchi-rani',
    title: 'KANCHI RANI',
    tagline: 'Signature Temple Reku Pallu',
    colorName: 'Imperial Crimson & Gold',
    colorBg: '#7D0A24',
    price: 82400,
    image: '/assets/exact_silk_card_3.png',
    motif: 'Elephant Gaja & Rudraksha'
  },
  {
    id: 'peacock-neelam',
    title: 'PEACOCK NEELAM',
    tagline: 'Double-Warp Twilight Silk',
    colorName: 'Deep Sapphire & Magenta',
    colorBg: '#0F2B48',
    price: 78600,
    image: '/assets/exact_silk_card_4.png',
    motif: 'Mayil Eyelet & Annam Bird'
  },
  {
    id: 'temple-vault',
    title: 'TEMPLE VAULT',
    tagline: 'Electroplated Solid Gold Zari',
    colorName: 'Molten Sandal & Pure Zari',
    colorBg: '#6A4E23',
    price: 86500,
    image: '/assets/exact_silk_card_5.png',
    motif: 'Kalash, Gopuram & Sacred Spire'
  }
];

// 4. THE RACK: 9 PIECES ON CLOTHES RAIL WITH EXACT FILTER COUNTS FROM 05-the-rack.png
export const RACK_PIECES: SareeItem[] = [
  {
    id: 'rack-1',
    name: 'NOOLAM TEMPLE GOLD BROCADE',
    subtitle: 'Pure 4-Ply Mulberry Silk Saree',
    category: 'zari',
    categoryLabel: 'Zari & Brocade',
    price: 13600,
    originalPrice: 15400,
    fabric: 'Pure Mulberry Silk (Silk Mark Certified)',
    zariType: 'Genuine Tested 24k Gold Zari',
    weaveTime: '24 Days Handwoven on Pit Loom',
    color: 'Molten Gold Brocade',
    colorHex: '#C59A27',
    frontImage: '/assets/clean_piece_1.png',
    backImage: '/assets/clean_rack_saree.png',
    description: 'An architectural heirloom piece featuring sacred elephant carvings along the lower pallu, woven with unbroken gold thread in Kanchipuram.',
    tag: 'Flagship Loom Piece'
  },
  {
    id: 'rack-2',
    name: 'NOOLAM SAFFRON RAW SILK BLOUSE',
    subtitle: 'Zardozi & French Knot Hand-Embroidery',
    category: 'blouse-full',
    categoryLabel: 'Full-Sleeve Blouses',
    price: 13600,
    fabric: 'Heavy Raw Silk with Silk Satin Lining',
    zariType: 'Dull Gold Aari & Micro Pearls',
    weaveTime: '60 Hours Artisan Hand Embroidery',
    color: 'Saffron Ochre Gold',
    colorHex: '#D97706',
    frontImage: '/assets/clean_piece_2.png',
    backImage: '/assets/clean_rack_blouse.png',
    description: 'A tailored masterpiece embellished with intricate temple gopuram motifs, micro pearls, and antique metallic thread.',
    tag: 'Boutique Ready'
  },
  {
    id: 'rack-3',
    name: 'KANCHI GAJA PURAM SILK',
    subtitle: 'Korvai Temple Spire Saree',
    category: 'silk',
    categoryLabel: 'Silk Sarees',
    price: 82000,
    fabric: 'Heavy Handloom Silk (850 grams)',
    zariType: 'Silver Core dipped in Gold Zari',
    weaveTime: '32 Days Handwoven with 3 Artisans',
    color: 'Temple Crimson & Ochre Gold',
    colorHex: '#7C182A',
    frontImage: '/assets/clean_piece_3.png',
    backImage: '/assets/clean_rack_saree.png',
    description: 'Classic three-shuttle korvai technique with jagged screw-pine flower spires rising up the body.',
    tag: 'Heritage Favorite'
  },
  {
    id: 'rack-4',
    name: 'MADURAI SUNGUDI CHECK',
    subtitle: 'Heritage Checkered Silk Drape',
    category: 'checked',
    categoryLabel: 'Checked Sarees',
    price: 64500,
    fabric: 'Double Weft Kanchipuram Silk',
    zariType: 'Tested Half-Fine Zari',
    weaveTime: '18 Days Loom Time',
    color: 'Turmeric Yellow & Forest Green Checks',
    colorHex: '#C59A27',
    frontImage: '/assets/clean_piece_4.png',
    backImage: '/assets/clean_rack_saree.png',
    description: 'Micro houndstooth and lattice checks bordered with miniature peacock medallions in brilliant green and yellow.',
    tag: 'Celebration Edition'
  },
  {
    id: 'rack-5',
    name: 'MAYIL EMBOSSED HALF SAREE',
    subtitle: 'Dhavani Set: Skirt, Blouse & Silk Dhavani',
    category: 'half',
    categoryLabel: 'Half Sarees',
    price: 58000,
    fabric: 'Mulberry Silk Pleats with Pure Tissue Dhavani',
    zariType: 'Liquid Gold Water Zari',
    weaveTime: '28 Days Handloom Assembly',
    color: 'Peacock Teal & Deep Fuchsia',
    colorHex: '#165B66',
    frontImage: '/assets/clean_piece_5.png',
    backImage: '/assets/clean_rack_saree.png',
    description: 'Traditional South Indian Pavada Dhavani re-imagined for ceremonial sangeet and engagement celebrations.',
    tag: 'Festive Favorite'
  },
  {
    id: 'rack-6',
    name: 'VAARANAM AYIRAM HALF SAREE',
    subtitle: 'Royal Procession Celebration Ensemble',
    category: 'half',
    categoryLabel: 'Half Sarees',
    price: 62000,
    fabric: 'Kanchi Brocade Skirt with Gold Zari Dupatta',
    zariType: 'Antique Copper Gold Zari',
    weaveTime: '30 Days Artisanal Production',
    color: 'Royal Purple & Mustard Gold',
    colorHex: '#3E1C4B',
    frontImage: '/assets/clean_piece_6.png',
    backImage: '/assets/clean_rack_saree.png',
    description: 'Depicts the sacred thousand-elephant procession from ancient Sangam poetry across the flared skirt borders.',
    tag: 'Collector Set'
  },
  {
    id: 'rack-7',
    name: 'KEMP BEADED SHORT BLOUSE',
    subtitle: 'Architectural Sweetheart Neckline',
    category: 'blouse-half',
    categoryLabel: 'Half-Sleeve Blouses',
    price: 12400,
    fabric: 'Rich Silk Velvet with Padded Cups',
    zariType: 'Hand-Cut Glass Kemp & Zari Cord',
    weaveTime: '72 Hours Single Artisan Handcraft',
    color: 'Midnight Bottle Green',
    colorHex: '#123324',
    frontImage: '/assets/clean_piece_7.png',
    backImage: '/assets/clean_rack_blouse.png',
    description: 'Structured blouse featuring an ornate keyhole back framed by deep ruby kemp stone drops and gold threadwork.',
    tag: 'Boutique Exclusive'
  },
  {
    id: 'rack-8',
    name: 'CHETTINAD AUBERGINE CHECK',
    subtitle: 'Brocade Bordered Palace Silk',
    category: 'checked',
    categoryLabel: 'Checked Sarees',
    price: 58500,
    fabric: 'Pure Mulberry Katan Silk',
    zariType: 'Antique Brass Gold Zari',
    weaveTime: '20 Days on Hand Pit Loom',
    color: 'Deep Brinjal & Burnt Orange',
    colorHex: '#4A1D36',
    frontImage: '/assets/clean_piece_4.png',
    backImage: '/assets/clean_rack_saree.png',
    description: 'Bold palatial checks reminiscent of Chettinad courtyard tiles, framed with radiant orange zari selvedges.',
    tag: 'Vintage Archive'
  },
  {
    id: 'rack-9',
    name: 'SWARNA KORVAI HEIRLOOM',
    subtitle: 'Pure Electroplated 24k Gold Zari Saree',
    category: 'zari',
    categoryLabel: 'Zari & Brocade',
    price: 88000,
    fabric: 'Heavy Weight Double Warp Kanchipuram',
    zariType: 'Pure Electroplated 24kt Gold Zari',
    weaveTime: '40 Days Master Weaver Guild',
    color: 'Molten Gold & Emerald',
    colorHex: '#8C6C26',
    frontImage: '/assets/clean_piece_1.png',
    backImage: '/assets/clean_rack_saree.png',
    description: 'Woven with dense zari coverage across the entire body, showcasing the holy sacred wheel (Chakra) and Swan motifs.',
    tag: 'Pure 24k Zari Certified'
  }
];

// 5. THE MUSE REELS (Exact 5 reels from 09-muse-reels.png)
export const MUSE_REELS: ReelItem[] = [
  {
    id: 'reel-1',
    number: 'REEL 01',
    duration: '0:16',
    fabricType: 'KANJIVARAM',
    title: 'Ponni Kanjivaram',
    location: 'Lamp room, Kanchipuram',
    thumbnail: '/assets/exact_reel_1.png',
    previewColor: '#6B1624',
    description: 'Early morning light filtering through the thousand-pillar hall, catching the molten reflections of pure gold zari.',
    drapeStyle: 'Traditional Madisar 9-Yard Variant'
  },
  {
    id: 'reel-2',
    number: 'REEL 02',
    duration: '0:31',
    fabricType: 'HAND-BLOCK',
    title: 'Marina Morning',
    location: 'Mylapore to the sea',
    thumbnail: '/assets/exact_reel_2.png',
    previewColor: '#1F3F34',
    description: 'The rustle of heavy 850-gram silk moving along Burmese teak corridors and sunlit Italian marble courtyards.',
    drapeStyle: 'Classic Pleated Front Drape'
  },
  {
    id: 'reel-3',
    number: 'REEL 03',
    duration: '0:15',
    fabricType: 'BANARASI KATAN',
    title: 'Kaali Banarasi',
    location: 'Studio, Varanasi',
    thumbnail: '/assets/exact_reel_3.png',
    previewColor: '#8C2B1D',
    description: 'Sacred agni flames glowing against vermilion silk as the auspicious mangala sutra is consecrated.',
    drapeStyle: 'Royal Bridal Pallu Pin'
  },
  {
    id: 'reel-4',
    number: 'REEL 04',
    duration: '0:38',
    fabricType: 'PURE SILK',
    title: 'Pachai Pattu',
    location: "The bride's chamber",
    thumbnail: '/assets/exact_reel_4.png',
    previewColor: '#28465B',
    description: 'Master weaver Appasamy throws the wooden shuttle across 6,000 mulberry warp threads in rhythmic symmetry.',
    drapeStyle: 'Casual Grace Pallu Fall'
  },
  {
    id: 'reel-5',
    number: 'REEL 05',
    duration: '0:17',
    fabricType: 'GEORGETTE SILK',
    title: 'Galli Sindoor',
    location: 'Old-city lanes',
    thumbnail: '/assets/exact_reel_5.png',
    previewColor: '#532D56',
    description: 'Evening temple lamps reflecting on the sacred tank water as a pastel lilac drape catches the warm sea breeze.',
    drapeStyle: 'Floating Butterfly Pallu'
  }
];

// 6. THE BRIDAL COLLECTION (Matching 10-bridal.png)
export const BRIDAL_COLLECTION: BridalSaree[] = [
  {
    id: 'bridal-1',
    title: 'Manjal Kalyanam Pattu',
    subtitle: 'The Sacred Muhurtham Saree',
    price: 87300,
    image: '/assets/clean_bridal_manjal.png',
    zariNote: 'Pure Pattu · Red-gold pallu',
    palluDetail: 'Grand 18-inch Thazhampoo Reku Temple Spire Pallu',
    tag: 'Certified 24k Zari',
    auspiciousTime: 'For Sacred Muhurtham & Vows'
  },
  {
    id: 'bridal-2',
    title: 'Kalyana Mahalakshmi',
    subtitle: 'Royal Procession Bridal Saree',
    price: 92500,
    image: '/assets/clean_bridal_mahalakshmi.png',
    zariNote: 'Interlocked 3-Shuttle Korvai with Heavy Tested Zari',
    palluDetail: 'Thousand-Elephant Procession with Gold Ingot Borders',
    tag: 'Pure Gold Zari',
    auspiciousTime: 'For Mangala Vaadhyam & Reception'
  },
  {
    id: 'bridal-3',
    title: 'Sengal Reku Vermilion',
    subtitle: 'Heritage Bridal Temple Red',
    price: 84000,
    image: '/assets/clean_bridal_vermilion.png',
    zariNote: 'Traditional Antique Dull Gold Zari (No Artificial Polish)',
    palluDetail: 'Auspicious Kalash, Mango Buttas & Rudraksha Edges',
    tag: '10% Muhurtham Special',
    auspiciousTime: 'For Kanyadanam & Saptapadi'
  }
];

// 7. FLAGSHIP BOUTIQUES
export const BOUTIQUES = [
  {
    city: 'Chennai',
    name: 'NOOLAM Flagship Manor',
    address: '42 Khader Nawaz Khan Road, Nungambakkam, Chennai 600006',
    hours: '10:30 AM – 8:30 PM (Mon – Sun)',
    phone: '+91 44 4892 1088',
    stylists: 'Personal Saree Draping & Trousseau Styling Available'
  },
  {
    city: 'Kanchipuram',
    name: 'Sacred Heritage Loom House',
    address: '108 Gandhi Road, Near Ekambaranathar Temple, Kanchipuram 631501',
    hours: '9:00 AM – 7:30 PM (Mon – Sun)',
    phone: '+91 44 2722 4590',
    stylists: 'Live Pit-Loom Weaving Demonstrations & Custom Trousseau Weaving'
  },
  {
    city: 'Bangalore',
    name: 'NOOLAM Atelier Bangalore',
    address: '8 Lavelle Road, Shanthala Nagar, Ashok Nagar, Bengaluru 560001',
    hours: '11:00 AM – 8:30 PM (Mon – Sun)',
    phone: '+91 80 4120 7744',
    stylists: 'Private VIP Bridal Suites & Jewelry Pairing Consultations'
  },
  {
    city: 'Hyderabad',
    name: 'NOOLAM Heritage Salon',
    address: 'Plot 360, Road No. 36, Jubilee Hills, Hyderabad 500033',
    hours: '10:30 AM – 8:30 PM (Mon – Sun)',
    phone: '+91 40 6712 9000',
    stylists: 'By-Appointment Muhurtham Styling Sessions'
  }
];
