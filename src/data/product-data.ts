// export const productTypes: ProductType[] = [
//   {
//     slug: "roman-shades",
//     name: "Roman Shades",
//     heroImage: "/images/roman-shades.webp",
//     blurb: "Elegant fabric shades that fold up neatly, combining drapery softness with shade functionality. Perfect for adding tailored style to any room.",
//     overview: "Roman shades bring sophisticated, custom styling to your windows with fabric that folds into clean pleats when raised. We'll help you choose from various fold styles and opacity levels, then professionally install them for smooth, reliable operation that complements your home's character.",
//     quickSpecs: {
//       motorization: "Available",
//       blackoutOption: "Available",
//       cordless: "Available",
//       customSizes: "Yes",
//       mountTypes: ["inside", "outside"],
//       controlOptions: ["corded", "cordless", "motorized", "smart"]
//     },
//     performance: {
//       lightControl: "Room darkening",
//       privacy: "High",
//       insulation: "Medium",
//       uvProtection: "Medium"
//     },
//     bestForRooms: ["Living rooms", "Bedrooms", "Dining rooms", "Home offices"],
//     materials: ["Linen", "Cotton", "Polyester", "Silk blends", "Faux silk"],
//     maintenance: "Easy care with regular light vacuuming. We'll provide specific cleaning guidance for your chosen fabric to keep them looking beautiful.",
//     safetyNotes: "We strongly recommend cordless or motorized options for homes with children and pets. All our installations meet current safety standards.",
//     typicalPriceTier: "Mid",
//     pros: [
//       "Soft, elegant fabric appearance that enhances any decor",
//       "Neat, space-saving folds when raised",
//       "Excellent light control and privacy options",
//       "Professional installation ensures perfect fit and smooth operation",
//       "Good insulation properties with the right fabric choices"
//     ],
//     cons: [
//       "Some fabrics may fade in direct sunlight over time",
//       "Wider windows may need multiple shades for best operation",
//       "More fabric care required than simpler shade styles"
//     ],
//     sources: [
//       { title: "Hunter Douglas Roman Shades Guide", url: "https://www.hunterdouglas.com/operating-systems/roman-shades" },
//       { title: "CPSC Window Covering Safety", url: "https://www.cpsc.gov/Safety-Education/Safety-Guides/Home/Window-Covering-Cords" }
//     ]
//   },
//   {
//     slug: "roller-shades",
//     name: "Roller Shades",
//     heroImage: "/images/roller-shades.webp",
//     blurb: "Simple, modern shades that roll up neatly into a compact tube. Offer clean lines and straightforward operation for any room.",
//     overview: "Roller shades provide minimalist styling with reliable, easy-to-use operation. We offer a wide range of fabrics from sheer to blackout, and our professional installation ensures they roll smoothly and fit perfectly for years of trouble-free use.",
//     quickSpecs: {
//       motorization: "Available",
//       blackoutOption: "Available",
//       cordless: "Available",
//       customSizes: "Yes",
//       mountTypes: ["inside", "outside"],
//       controlOptions: ["corded", "cordless", "motorized", "smart"]
//     },
//     performance: {
//       lightControl: "Blackout",
//       privacy: "High",
//       insulation: "Low",
//       uvProtection: "High"
//     },
//     bestForRooms: ["Bedrooms", "Media rooms", "Kitchens", "Bathrooms"],
//     materials: ["Polyester", "Vinyl", "Fiberglass", "Solar screen fabrics"],
//     maintenance: "Easy to clean with a damp cloth. We'll show you the simple maintenance needed to keep them looking like new.",
//     safetyNotes: "We install cordless and motorized options that eliminate cord hazards. Perfect for families with young children and pets.",
//     typicalPriceTier: "Budget",
//     pros: [
//       "Clean, minimalist look that works with any decor",
//       "Excellent light control from soft filtering to complete blackout",
//       "Easy to operate and maintain",
//       "Space-efficient design that doesn't block views when open",
//       "Professional installation ensures smooth rolling action"
//     ],
//     cons: [
//       "Limited insulation compared to cellular shades",
//       "Some light may show around the edges",
//       "Vinyl materials can become less flexible over time in extreme temperatures"
//     ],
//     sources: [
//       { title: "Hunter Douglas Roller Shades", url: "https://www.hunterdouglas.com/operating-systems/roller-shades" },
//       { title: "CPSC Safety Standards", url: "https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Window-Coverings" }
//     ]
//   },
//   {
//     slug: "cellular-shades",
//     name: "Cellular Shades",
//     heroImage: "/images/cellular-shades.webp",
//     blurb: "Energy-efficient shades with honeycomb cells that trap air, helping keep rooms comfortable while reducing energy costs.",
//     overview: "Cellular shades are designed with unique honeycomb pockets that create excellent insulation for your windows. We'll help you choose the right cell size and opacity, then install them with precision to maximize their energy-saving benefits and provide flexible light control.",
//     quickSpecs: {
//       motorization: "Available",
//       blackoutOption: "Available",
//       cordless: "Available",
//       customSizes: "Yes",
//       mountTypes: ["inside", "outside"],
//       controlOptions: ["corded", "cordless", "motorized", "smart"]
//     },
//     performance: {
//       lightControl: "Room darkening",
//       privacy: "High",
//       insulation: "High",
//       uvProtection: "High"
//     },
//     bestForRooms: ["Bedrooms", "Living rooms", "Nurseries", "Sunrooms"],
//     materials: ["Polyester", "Nylon", "Specialty insulating fabrics"],
//     maintenance: "Light vacuuming keeps them clean. We'll advise on proper care to maintain their insulating properties and appearance.",
//     safetyNotes: "We recommend cordless designs for all homes, and motorized options for hard-to-reach windows. Safety is built into every installation.",
//     typicalPriceTier: "Mid",
//     pros: [
//       "Excellent insulation that helps reduce energy costs",
//       "Multiple light control options for any time of day",
//       "Top-down/bottom-up operation available for lighting flexibility",
//       "Professional installation ensures optimal energy performance",
//       "Clean, modern appearance with functional benefits"
//     ],
//     cons: [
//       "Thicker profile than some other shade types",
//       "More limited fabric and color choices",
//       "Higher initial cost than basic roller shades"
//     ],
//     sources: [
//       { title: "DOE Energy-Efficient Window Coverings", url: "https://www.energy.gov/energysaver/energy-efficient-window-coverings" },
//       { title: "CPSC Window Covering Safety", url: "https://www.cpsc.gov/Safety-Education/Safety-Guides/Home/Window-Covering-Cords" }
//     ]
//   },
//   {
//     slug: "wood-faux-blinds",
//     name: "Wood/Faux Blinds",
//     heroImage: "/images/wood-faux-blinds.webp",
//     blurb: "Classic horizontal blinds in real wood or durable faux wood. Offer precise light control and timeless appeal.",
//     overview: "Wood and faux wood blinds provide the classic look of traditional blinds with durable, reliable operation. We'll help you choose between real wood's natural beauty and faux wood's moisture resistance, then install them for perfect light control and smooth operation.",
//     quickSpecs: {
//       motorization: "Available",
//       blackoutOption: "Not available",
//       cordless: "Available",
//       customSizes: "Most widths/heights",
//       mountTypes: ["inside", "outside"],
//       controlOptions: ["corded", "cordless", "motorized", "smart"]
//     },
//     performance: {
//       lightControl: "Light filtering",
//       privacy: "Medium",
//       insulation: "Low",
//       uvProtection: "Medium"
//     },
//     bestForRooms: ["Living rooms", "Dining rooms", "Home offices", "Bedrooms"],
//     materials: ["Basswood", "Oak", "PVC", "Composite materials"],
//     maintenance: "Easy dusting keeps them looking great. We'll show you the simple cleaning routine that maintains their beauty.",
//     safetyNotes: "We install modern cordless systems that eliminate traditional cord hazards. Motorized options available for large or hard-to-reach windows.",
//     typicalPriceTier: "Mid",
//     pros: [
//       "Precise light control with adjustable slats",
//       "Timeless look that complements any decor style",
//       "Durable construction that stands up to daily use",
//       "Faux wood options resist moisture in humid areas",
//       "Professional installation ensures smooth operation and perfect alignment"
//     ],
//     cons: [
//       "Regular dusting needed to keep slats clean",
//       "Real wood may warp in very humid conditions",
//       "Less insulating than fabric-based window treatments"
//     ],
//     sources: [
//       { title: "Hunter Douglas Wood Blinds", url: "https://www.hunterdouglas.com/operating-systems/wood-blinds" },
//       { title: "CPSC Safety Standards", url: "https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Window-Coverings" }
//     ]
//   },
//   {
//     slug: "shutters",
//     name: "Shutters",
//     heroImage: "/images/shutters.webp",
//     blurb: "Permanent window treatments built to last, with movable louvers for perfect light control and timeless architectural appeal.",
//     overview: "Shutters are custom-built window treatments that add lasting value and beauty to your home. We craft them to fit your windows perfectly, then install them with precision for smooth louver operation and a built-in look that enhances your home's architecture.",
//     quickSpecs: {
//       motorization: "Not available",
//       blackoutOption: "Not available",
//       cordless: "Available",
//       customSizes: "Yes",
//       mountTypes: ["inside", "outside"],
//       controlOptions: ["cordless"]
//     },
//     performance: {
//       lightControl: "Light filtering",
//       privacy: "Medium",
//       insulation: "Medium",
//       uvProtection: "High"
//     },
//     bestForRooms: ["Living rooms", "Bedrooms", "Sunrooms", "Bathrooms"],
//     materials: ["Basswood", "Paulownia", "PVC", "Composite wood"],
//     maintenance: "Easy dusting maintains their beauty. We'll provide care instructions to keep them looking like new for years.",
//     safetyNotes: "No cord hazards with shutter systems. Our expert installation ensures they're securely mounted and operate safely.",
//     typicalPriceTier: "Premium",
//     pros: [
//       "Exceptional durability that adds value to your home",
//       "Perfect fit with our custom measuring and installation",
//       "Excellent control over light and privacy",
//       "Works beautifully with unusual window shapes and sizes",
//       "Lasting quality that stands the test of time"
//     ],
//     cons: [
//       "Higher initial investment than other window treatments",
//       "Permanent installation that can't be easily changed",
//       "Limited window access compared to other treatments",
//       "Professional installation required for best results"
//     ],
//     sources: [
//       { title: "Hunter Douglas Shutters", url: "https://www.hunterdouglas.com/operating-systems/shutters" },
//       { title: "CPSC Window Covering Safety", url: "https://www.cpsc.gov/Safety-Education/Safety-Guides/Home/Window-Covering-Cords" }
//     ]
//   },
//   {
//     slug: "draperies",
//     name: "Draperies",
//     heroImage: "/images/draperies.webp",
//     blurb: "Custom fabric panels that add warmth, elegance, and superior insulation to your rooms. The ultimate in window treatment luxury.",
//     overview: "Draperies offer the highest level of customization and elegance for your windows. We'll help you select the perfect fabric, lining, and style, then professionally install them with proper hardware for beautiful stacking and smooth operation that transforms your space.",
//     quickSpecs: {
//       motorization: "Available",
//       blackoutOption: "Available",
//       cordless: "Available",
//       customSizes: "Yes",
//       mountTypes: ["outside"],
//       controlOptions: ["corded", "cordless", "motorized", "smart"]
//     },
//     performance: {
//       lightControl: "Blackout",
//       privacy: "High",
//       insulation: "High",
//       uvProtection: "High"
//     },
//     bestForRooms: ["Living rooms", "Bedrooms", "Dining rooms", "Master suites"],
//     materials: ["Linen", "Cotton", "Velvet", "Silk", "Polyester blends"],
//     maintenance: "We'll recommend the right cleaning approach for your fabric choice. Most draperies benefit from professional cleaning.",
//     safetyNotes: "We install motorized systems that eliminate cord concerns. All hardware is securely mounted for safety and durability.",
//     typicalPriceTier: "Premium",
//     pros: [
//       "Superior insulation that can reduce energy costs",
//       "Endless fabric and style choices for complete customization",
//       "Elegant, luxurious appearance that elevates any room",
//       "Complete light blocking when fully lined",
//       "Expert installation ensures beautiful drape and operation"
//     ],
//     cons: [
//       "Requires adequate wall space for proper stacking when open",
//       "Higher maintenance than other window treatments",
//       "Professional installation recommended for best results",
//       "Typically the most expensive window treatment option"
//     ],
//     sources: [
//       { title: "DOE Window Treatment Efficiency", url: "https://www.energy.gov/energysaver/window-treatments" },
//       { title: "CPSC Window Covering Safety", url: "https://www.cpsc.gov/Safety-Education/Safety-Guides/Home/Window-Covering-Cords" }
//     ]
//   },
//   {
//     slug: "exterior-shades",
//     name: "Exterior Shades",
//     heroImage: "/images/exterior-shades.webp",
//     blurb: "Outdoor shading systems that block heat before it enters your home, reducing cooling costs and protecting your interiors.",
//     overview: "Exterior shades are the most effective way to control solar heat gain and reduce your cooling costs. We install weather-resistant systems designed to withstand outdoor conditions while providing excellent sun protection and energy savings for your home.",
//     quickSpecs: {
//       motorization: "Optional",
//       blackoutOption: "Available",
//       cordless: "Available",
//       customSizes: "Yes",
//       mountTypes: ["outside"],
//       controlOptions: ["cordless", "motorized", "smart"]
//     },
//     performance: {
//       lightControl: "Room darkening",
//       privacy: "Medium",
//       insulation: "High",
//       uvProtection: "High"
//     },
//     bestForRooms: ["Sunrooms", "South/West facing windows", "Patio doors", "Great rooms"],
//     materials: ["Solution-dyed acrylic", "Polyester mesh", "Vinyl-coated fiberglass", "Aluminum"],
//     maintenance: "Simple cleaning with periodic hosing. We provide complete maintenance guidance and can service motorized components.",
//     safetyNotes: "Professional installation is essential for wind resistance and safe operation. Our systems include safety features for worry-free use.",
//     typicalPriceTier: "Premium",
//     pros: [
//       "Superior heat blocking compared to interior treatments",
//       "Significant reduction in cooling costs during warm months",
//       "Protects furniture and flooring from UV damage",
//       "Extends usable outdoor living space",
//       "Expert installation ensures weather resistance and durability"
//     ],
//     cons: [
//       "Higher initial investment than interior treatments",
//       "Requires professional installation for safety and performance",
//       "Exposed to weather elements requiring occasional maintenance",
//       "More complex maintenance than interior window treatments"
//     ],
//     sources: [
//       { title: "DOE Exterior Window Treatments", url: "https://www.energy.gov/energysaver/window-attachments" },
//       { title: "CPSC Safety Guidelines", url: "https://www.cpsc.gov/Safety-Education/Safety-Guides/Home/Window-Covering-Cords" }
//     ]
//   },
//   {
//     slug: "sheer-layered",
//     name: "Sheer/Layered",
//     heroImage: "/images/sheer-layered.webp",
//     blurb: "Innovative shades that combine sheer front fabric with room-darkening layers. Perfect light control while maintaining outside views.",
//     overview: "Sheer layered shades offer the ultimate in lighting flexibility, allowing you to enjoy soft filtered light or complete privacy as needed. We'll help you choose the perfect combination of fabrics, then install them for seamless operation that lets you control your environment throughout the day.",
//     quickSpecs: {
//       motorization: "Available",
//       blackoutOption: "Available",
//       cordless: "Available",
//       customSizes: "Yes",
//       mountTypes: ["inside", "outside"],
//       controlOptions: ["corded", "cordless", "motorized", "smart"]
//     },
//     performance: {
//       lightControl: "Blackout",
//       privacy: "High",
//       insulation: "Medium",
//       uvProtection: "High"
//     },
//     bestForRooms: ["Bedrooms", "Media rooms", "Living rooms", "Nurseries"],
//     materials: ["Polyester", "Voile", "Translucent woven fabrics", "Blackout lining"],
//     maintenance: "Gentle vacuuming keeps them looking fresh. We'll provide specific care instructions for your layered fabric system.",
//     safetyNotes: "We recommend cordless or motorized operation for safest use. Our installation ensures all layers work together smoothly and safely.",
//     typicalPriceTier: "Premium",
//     pros: [
//       "Perfect lighting control from soft diffusion to complete blackout",
//       "Maintains your view while providing daytime privacy",
//       "Modern, sophisticated look that works with contemporary decor",
//       "Excellent protection for your furnishings from UV rays",
//       "Professional installation ensures all layers operate perfectly together"
//     ],
//     cons: [
//       "More complex mechanism than single-layer shades",
//       "Higher cost than basic shade options",
//       "Thicker profile than simple roller shades",
//       "Benefits most from professional installation"
//     ],
//     sources: [
//       { title: "Hunter Douglas Silhouette Shades", url: "https://www.hunterdouglas.com/operating-systems/silhouette-shades" },
//       { title: "CPSC Safety Guidelines", url: "https://www.cpsc.gov/Safety-Education/Safety-Guides/Home/Window-Covering-Cords" }
//     ]
//   },
//   {
//     slug: "natural-woven",
//     name: "Natural Woven",
//     heroImage: "/images/natural-woven.webp",
//     blurb: "Eco-friendly shades made from sustainable materials like bamboo and grasses. Bring organic texture and soft natural light to your space.",
//     overview: "Natural woven shades add warmth and character to your rooms with materials from nature. We'll help you choose from bamboo, grasses, and other sustainable options, then install them to showcase their unique textures while providing gentle light filtering and a connection to the outdoors.",
//     quickSpecs: {
//       motorization: "Not available",
//       blackoutOption: "Not available",
//       cordless: "Available",
//       customSizes: "Most widths/heights",
//       mountTypes: ["inside", "outside"],
//       controlOptions: ["corded", "cordless"]
//     },
//     performance: {
//       lightControl: "Sheer",
//       privacy: "Low",
//       insulation: "Low",
//       uvProtection: "Low"
//     },
//     bestForRooms: ["Sunrooms", "Living rooms", "Dining rooms", "Casual spaces"],
//     materials: ["Bamboo", "Jute", "Grasses", "Reeds", "Rattan"],
//     maintenance: "Simple dusting maintains their natural beauty. We'll advise on proper care to preserve their organic materials.",
//     safetyNotes: "Cordless operation recommended for all installations. We ensure natural materials are properly treated for safe home use.",
//     typicalPriceTier: "Mid",
//     pros: [
//       "Sustainable, eco-friendly materials from renewable sources",
//       "Unique natural textures that add character to any room",
//       "Soft, diffused light that creates a warm atmosphere",
//       "Lightweight and easy to operate",
//       "Professional installation showcases their natural beauty"
//     ],
//     cons: [
//       "Limited privacy and light control compared to other treatments",
//       "Not ideal for high-humidity areas like bathrooms",
//       "Natural materials may fade in direct sunlight over time",
//       "More limited size options than fabric shades"
//     ],
//     sources: [
//       { title: "Hunter Douglas Natural Shades", url: "https://www.hunterdouglas.com/operating-systems/natural-shades" },
//       { title: "CPSC Safety Guidelines", url: "https://www.cpsc.gov/Safety-Education/Safety-Guides/Home/Window-Covering-Cords" }
//     ]
//   }
// ];
// ]
