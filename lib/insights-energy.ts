// Energy guides (November 2026). Rules checked against the Energy (Net-Metering) Regulations, 2024
// and reports on the 2018 revocation of the Solar Water Heating Regulations. No output figures
// for specific turbines or panels: those depend on the site and the product.
import type { Insight } from "./insights";

export const energyInsights: Insight[] = [
  {
    slug: "net-metering-kenya",
    title: "Net metering in Kenya: credit for your solar power",
    description:
      "How net metering works in Kenya under the 2024 rules: who qualifies, the 4 kW and 10 kW home limits, how credits work, and how to apply to Kenya Power.",
    date: "2026-11-04",
    sections: [
      {
        heading: "What net metering is",
        body: [
          "Net metering lets a home, school or business with its own solar panels or wind turbine send spare power to the Kenya Power grid. A two-way meter records power coming in and power going out, and the power you send out earns credit on your bill.",
          "It came into force under the Energy (Net-Metering) Regulations, 2024.",
        ],
      },
      {
        heading: "Who can use it",
        body: ["You can apply if you are a grid-connected Kenya Power customer who owns the system. The main limits are:"],
        list: [
          "Homes on single-phase power: systems up to 4 kW",
          "Homes on three-phase power: systems up to 10 kW",
          "Commercial and institutional customers: up to 1 MW, and no more than your past maximum demand",
          "Solar, wind and small hydro all qualify",
        ],
      },
      {
        heading: "How the credit works",
        body: [
          "You pay only for the difference between the power you take from the grid and the power you send back. Each unit you export earns credit worth half a unit at your normal tariff.",
          "Unused credit rolls over to the next bill, but it expires at the end of Kenya Power's financial year on 30 June. There is no cash payout, so net metering rewards a system sized to your own use, not an oversized one.",
        ],
      },
      {
        heading: "How to apply",
        body: [],
        list: [
          "Apply to Kenya Power with your system details",
          "Once approved, sign the net-metering agreement, which runs for five years",
          "Install the approved two-way smart meter within six months, at your own cost",
          "Use a licensed solar installer, so the system meets the connection standards",
        ],
      },
      {
        heading: "Is it worth it?",
        body: [
          "Net metering helps most when your panels produce more than you use during the day, for example a home that is empty at midday. A school that uses most of its power during lessons will use nearly all of its own solar directly, so net metering adds less. Either way, size the system to what you actually use first.",
        ],
      },
    ],
    related: [
      { label: "Solar power for homes and schools", href: "/insights/solar-power-for-homes-and-schools/" },
      { label: "Redbay Energy: solar and wind", href: "/companies/energy/" },
    ],
  },
  {
    slug: "small-wind-turbines-kenya",
    title: "Small wind turbines for homes and schools in Kenya",
    description:
      "When a small wind turbine makes sense in Kenya, how vertical-axis turbines differ, why site and height matter, and how wind pairs with solar.",
    date: "2026-11-04",
    sections: [
      {
        heading: "Wind depends on your site",
        body: [
          "Solar works almost anywhere in Kenya. Wind does not: it depends on how windy your exact site is. The power in the wind rises very steeply with wind speed, so doubling the wind speed gives roughly eight times the power. A small difference in average wind makes a big difference to what a turbine produces.",
          "Open, high ground, ridges, lakeshores and parts of the coast tend to be windier. Sites surrounded by tall trees and buildings usually are not.",
        ],
      },
      {
        heading: "Check the wind before you buy",
        body: [
          "Before investing, check how much wind your site actually gets. A wind meter (anemometer) on a pole for a few months gives real data. Local knowledge helps too: if the trees lean one way and the washing always dries fast, that is a good sign.",
        ],
      },
      {
        heading: "Height and clear air",
        body: [
          "Trees, roofs and walls slow the wind and make it turbulent. A turbine should be mounted well above nearby obstacles on a strong, properly founded mast. Mounting a turbine on a house roof is usually a poor choice, as the wind there is turbulent and the vibration can carry into the building.",
        ],
      },
      {
        heading: "Vertical-axis turbines",
        body: [
          "Most turbines you see have a propeller facing the wind. Vertical-axis turbines spin around an upright shaft instead. They accept wind from any direction without turning to face it, cope better with gusty, changing wind, and are usually quieter. They are generally less efficient than propeller types in steady, strong wind, so the choice depends on your site.",
          "Redbay Energy installs Elege vertical-axis turbines, chosen for sites where the wind changes direction often.",
        ],
      },
      {
        heading: "Wind works best with solar",
        body: [
          "Wind often blows when the sun is weak: at night, in the evening and during cloudy, stormy weather. Pairing a turbine with solar panels and a battery gives steadier power than either on its own. Our guide to hybrid systems explains how they fit together.",
        ],
      },
      {
        heading: "Questions to ask",
        body: [],
        list: [
          "How windy is the site, and how was that measured?",
          "How tall is the mast, and what foundation holds it?",
          "What happens in very strong wind: does the turbine brake or furl?",
          "How does it connect to the batteries and inverter?",
          "What maintenance does it need, and who does it?",
        ],
      },
    ],
    related: [
      { label: "Redbay Energy: solar and wind", href: "/companies/energy/" },
      { label: "Solar and wind hybrid systems", href: "/insights/solar-wind-hybrid-systems/" },
    ],
  },
  {
    slug: "solar-wind-hybrid-systems",
    title: "Solar and wind hybrid systems explained",
    description:
      "How a solar and wind hybrid system works, why it gives steadier power than solar alone, and what a home or school needs: panels, turbine, batteries, inverter.",
    date: "2026-11-04",
    sections: [
      {
        heading: "Why combine them",
        body: [
          "Solar panels produce power only in daylight and less on cloudy days. Wind is often stronger at night and in stormy weather. A hybrid system uses both, so the batteries are topped up more often and you depend less on the grid or a generator.",
        ],
      },
      {
        heading: "The main parts",
        body: [],
        list: [
          "Solar panels on the roof or on a ground frame",
          "A wind turbine on a mast, clear of trees and buildings",
          "A charge controller for each source, so batteries charge safely",
          "A battery bank to store power for the evening and night",
          "An inverter that turns battery power into normal household power",
          "Optional connection to the grid, which can qualify for net metering",
        ],
      },
      {
        heading: "Who it suits",
        body: [
          "A hybrid makes most sense where the site is windy and where power is needed at night: boarding schools, homes off the grid, farms and places with frequent blackouts. On a sheltered site, more solar and batteries is usually the better buy.",
        ],
      },
      {
        heading: "Size it to the need",
        body: [
          "Start with a list of what must run and for how long, especially at night. That sets the battery size. The panels and turbine are then sized to refill the batteries on a typical day. Oversizing wastes money; undersizing leaves you in the dark.",
        ],
      },
      {
        heading: "Keep it safe and working",
        body: [
          "Use licensed installers, proper earthing and lightning protection, and fuses or breakers on every circuit. Keep batteries in a cool, ventilated room. Panels need occasional cleaning, and a turbine needs a check on its bearings and fixings at least once a year.",
        ],
      },
    ],
    related: [
      { label: "Small wind turbines for homes and schools", href: "/insights/small-wind-turbines-kenya/" },
      { label: "Solar power for homes and schools", href: "/insights/solar-power-for-homes-and-schools/" },
      { label: "Redbay Energy: solar and wind", href: "/companies/energy/" },
    ],
  },
  {
    slug: "solar-water-heaters-kenya",
    title: "Solar water heaters in Kenya: are they worth it?",
    description:
      "How solar water heaters work, flat-plate or evacuated-tube, sizing the tank, hard water and roof placement, and why they are no longer compulsory in Kenya.",
    date: "2026-11-04",
    sections: [
      {
        heading: "Why they pay off",
        body: [
          "Heating water with an electric heater or instant shower uses a lot of power. A solar water heater uses the sun instead, so the savings show on every bill. For a family, a boarding school or a guest house that uses hot water every day, the heater usually pays for itself over time.",
        ],
      },
      {
        heading: "Are they compulsory?",
        body: [
          "Kenya once required solar water heating on buildings that use more than 100 litres of hot water a day. Parliament revoked those rules in 2018, so a solar water heater is now your choice, not a legal requirement. It is still one of the simplest ways to cut power bills.",
        ],
      },
      {
        heading: "Flat-plate or evacuated-tube",
        body: [],
        list: [
          "Flat-plate panels are tough, simple and work well in sunny, warm areas",
          "Evacuated-tube heaters lose less heat, so they do better in cool or cloudy places like the highlands",
          "Where the water is hard, choose a system designed for it, or the pipes and tubes will scale up",
        ],
      },
      {
        heading: "Size the tank to the household",
        body: [
          "The tank should hold about a day's hot water for everyone using it. Size it for how many people shower and whether the kitchen and laundry also use hot water. A small electric backup element keeps water hot on cloudy days.",
        ],
      },
      {
        heading: "Plan it into the build",
        body: [
          "The roof must carry the weight of a full tank, so tell your builder early. Place the panel where it gets sun most of the day, keep pipe runs short and insulated, and plan the cold and hot water lines before the walls are plastered. We fitted one this way on our Kakamega bungalow.",
        ],
      },
    ],
    related: [
      { label: "Family bungalow with a solar water heater, Kakamega", href: "/projects/kakamega-bungalow/" },
      { label: "Redbay Energy: solar and wind", href: "/companies/energy/" },
    ],
  },
  {
    slug: "solar-for-schools-kenya",
    title: "Solar power for schools in Kenya: a planning guide",
    description:
      "How to plan solar for a school in Kenya: day and boarding loads, batteries, water pumping, security against theft, maintenance and phasing the investment.",
    date: "2026-11-04",
    sections: [
      {
        heading: "Schools suit solar",
        body: [
          "Most school power is used during the day, for lights, computers, printers and labs. That is exactly when solar panels produce, so a day school can use most of its solar power directly with only a small battery.",
        ],
      },
      {
        heading: "Boarding schools need night power",
        body: [
          "A boarding school also needs power in the evening and at night for dormitory lights, prep, security lighting and the kitchen. That power comes from batteries, so boarding schools need a larger battery bank. List the night loads carefully, as they set most of the cost.",
        ],
      },
      {
        heading: "Water pumping",
        body: [
          "Pumping water from a borehole to a raised tank is one of the best uses of solar. A solar pump fills the tank during the day, and the tank stores water instead of a battery storing power. This often pays back faster than any other part of a school's solar system.",
        ],
      },
      {
        heading: "Security and safety",
        body: [],
        list: [
          "Use anti-theft fixings on panels, and fence or light ground-mounted arrays",
          "Lock the battery and inverter room, and keep it cool and ventilated",
          "Fit proper earthing and lightning protection",
          "Keep sockets and cables out of reach of young learners",
        ],
      },
      {
        heading: "Maintenance and monitoring",
        body: [
          "Dusty compounds cover panels quickly, so plan regular cleaning. Train one staff member to read the inverter display and spot problems early, and agree a service visit with the installer. Many inverters can send daily reports to a phone.",
        ],
      },
      {
        heading: "Start small, grow later",
        body: [
          "A school can start with the most important loads, such as offices, the computer room and the water pump, and add panels and batteries as funds allow. Plan the wiring and inverter so the system can grow without being replaced.",
        ],
      },
    ],
    related: [
      { label: "Merishaw School, Isinya", href: "/projects/merishaw-school/" },
      { label: "Planning a school building", href: "/insights/planning-a-school-building/" },
      { label: "Redbay Energy: solar and wind", href: "/companies/energy/" },
    ],
  },
];
