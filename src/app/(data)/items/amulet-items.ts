import { AmuletItem } from './types/AmuletItem'

export const amuletItems: AmuletItem[] = [
  {
    category: 'amulet',
    name: 'Abrasive Whetstone',
    imagePath: '/amulet/abrasive_whetstone.png',
    id: '6sqyf9',
    dlc: 'base',
    tags: ['Critical Chance'],
    description:
      'When attacking a BLEEDING enemy, Critical Chance is increased by 15% and Critical Damage is increased by 15%.',
    wikiLinks: ['https://remnant.wiki/Abrasive_Whetstone'],
  },
  {
    category: 'amulet',
    name: 'Ankh of Power',
    imagePath: '/amulet/ankh_of_power.png',
    id: 'ca8ada',
    dlc: 'base',
    tags: ['All Damage'],
    description: `Grants 15% increase to all damage. Consuming a Relic increases the bonus to 25% for 15s.`,
    wikiLinks: [`https://remnant.wiki/Ankh_of_Power`],
  },
  {
    category: 'amulet',
    name: 'Beads of the Valorous',
    imagePath: '/amulet/beads_of_the_valorous.png',
    id: 'n8gqNY',
    dlc: 'dlc2',
    tags: ['Damage Reduction', 'Movement Speed', 'Health'],
    description: `Increases Damage Reduction and Movement Speed by 1% for every 5% of missing Max Health. Bonus is doubled at or below 50% Max Health. Max 10 stacks.`,
    wikiLinks: [`https://remnant.wiki/Beads_of_the_Valorous`],
  },
  {
    category: 'amulet',
    name: 'Birthright of the Lost',
    imagePath: '/amulet/birthright_of_the_lost.png',
    id: '41ookr',
    dlc: 'base',
    tags: ['Perfect Dodge'],
    description:
      'Increases All Damage by 10%. On Perfect Dodge, apply EXPOSED on the attacker for 15s.\n' +
      '\n' +
      'EXPOSED: Target receives 15% additional damage from all sources.',
    wikiLinks: [`https://remnant.wiki/Birthright_of_the_Lost`],
  },
  {
    category: 'amulet',
    name: "Brewmaster's Cork",
    imagePath: '/amulet/brewmasters_cork.png',
    id: '6il3tm',
    dlc: 'base',
    tags: ['Damage Reduction'],
    description:
      'Increases active Concoction limit by 2 and reduces all incoming damage by 2% for each active Concoction.',
    wikiLinks: [`https://remnant.wiki/Brewmaster's_Cork`],
  },
  {
    category: 'amulet',
    name: 'Broken Pocket Watch',
    imagePath: '/amulet/broken_pocket_watch.png',
    id: 'sap1xm',
    dlc: 'base',
    tags: ['Stamina'],
    description:
      'Increases Stamina Regeneration by 25 and reduces Stamina Cost by 50%.',
    wikiLinks: [`https://remnant.wiki/Broken_Pocket_Watch`],
  },
  {
    category: 'amulet',
    name: "Butcher's Fetish",
    imagePath: '/amulet/butchers_fetish.png',
    id: '67s1pu',
    dlc: 'base',
    tags: ['Critical Chance', 'Charged Melee'],
    description:
      'Increases Critical Chance by 15% and Critical Damage by 25% for 5s after striking an enemy with a Charged Melee Attack.',
    wikiLinks: [`https://remnant.wiki/Butcher's_Fetish`],
  },
  {
    category: 'amulet',
    name: 'Cervine Keepsake',
    imagePath: '/amulet/cervine_keepsake.png',
    id: '5sfzsd',
    dlc: 'dlc2',
    tags: ['Movement Speed'],
    description:
      'On Relic Use, gain a stack of CALL OF THE DOE for 30s. Max 5 stacks.\n' +
      '\n' +
      'CALL OF THE DOE: Increases Movement Speed by 4% per stack. When CALL OF THE DOE expires, regain 1 Relic Charge per stack.',
    wikiLinks: [`https://remnant.wiki/Cervine_Keepsake`],
  },
  {
    category: 'amulet',
    name: 'Chains of Amplification',
    imagePath: '/amulet/chains_of_amplification.png',
    id: '5sfzsx',
    dlc: 'base',
    tags: ['Status Effect', 'All Damage'],
    description: `Increases all damage dealt to targets suffering from a Status Effect by 20%.`,
    wikiLinks: [`https://remnant.wiki/Chains_of_Amplification`],
  },
  {
    category: 'amulet',
    name: 'Cleansing Stone',
    imagePath: '/amulet/cleansing_stone.png',
    id: 'nm7b6f',
    dlc: 'base',
    tags: ['Status Effect'],
    description:
      'Reduces Duration of Elemental Status Effects against wearer by 50%. Relic use cleanses Elemental Status effects and grants 25% of wearers Max Health to all allies within 20m when cleansed.',
    externalTokens: [`Amplitude`],
    wikiLinks: [`https://remnant.wiki/Cleansing_Stone`],
  },
  {
    category: 'amulet',
    name: 'Core Booster',
    imagePath: '/amulet/core_booster.png',
    id: 'wb4ixr',
    dlc: 'base',
    tags: ['Weakspot Damage'],
    description:
      'Increases Weakspot damage by 50% for 10s after killing an enemy.',
    wikiLinks: [`https://remnant.wiki/Core_Booster`],
  },
  {
    category: 'amulet',
    name: 'Cost of Betrayal',
    imagePath: '/amulet/cost_of_betrayal.png',
    dlc: 'dlc1',
    id: 'hug5mz',
    tags: ['All Damage', 'Damage Reduction'],
    description:
      'Reduces Relic Charges to 1. Increases All Damage by 25% when wearer has 1 Relic Charge. Increases incoming damage by 25% when wearer has no Relic Charge. After 15s of having no Relic Charges, regain 1 Relic Charge.',
    wikiLinks: [`https://remnant.wiki/Cost_of_Betrayal`],
  },
  {
    category: 'amulet',
    name: "Daredevil's Charm",
    imagePath: '/amulet/daredevils_charm.png',
    id: 'ik580i',
    dlc: 'base',
    tags: ['All Damage', 'Movement Speed', 'Hardcore Reward', 'Encumbrance'],
    description:
      'Gain 7.5% to all damage dealt and 3.75% Movement Speed for each empty Armor slot.',
    wikiLinks: [`https://remnant.wiki/Daredevil's_Charm`],
  },
  {
    category: 'amulet',
    name: 'Death-Soaked Idol',
    imagePath: '/amulet/death_soaked_idol.png',
    dlc: 'dlc1',
    id: 'ui1miz',
    tags: ['All Damage', 'Status Effect'],
    description: `Increases All Damage by 6% for each entity within 20m suffering from a unique Negative Status Effect. Max 5 stacks.`,
    wikiLinks: [`https://remnant.wiki/Death-Soaked_Idol`],
  },
  {
    category: 'amulet',
    name: "Death's Embrace",
    imagePath: '/amulet/deaths_embrace.png',
    id: 'i13ipm',
    dlc: 'base',
    tags: ['All Damage'],
    description:
      'Gain 15% to All Damage when Health is not completely full. When below 50% Health, gain an additional 10% bonus to All Damage and HASTE.',
    wikiLinks: [`https://remnant.wiki/Death's_Embrace`],
  },
  {
    category: 'amulet',
    name: 'Decayed Margin',
    imagePath: '/amulet/decayed_margin.png',
    id: 'dipf2o',
    dlc: 'base',
    tags: ['Lifesteal', 'Melee Damage'],
    description:
      'Melee hits gain 3% base damage dealt as Lifesteal. For each 25% missing Health, gain 3% additional Melee Lifesteal. When Health is full, gain 35% Melee Damage.',
    wikiLinks: [`https://remnant.wiki/Decayed_Margin`],
  },
  {
    category: 'amulet',
    name: 'Detonation Trigger',
    imagePath: '/amulet/detonation_trigger.png',
    id: '3zi80a',
    dlc: 'base',
    description:
      'Increases Explosion damage by 25%. Explosions apply 165-465 BURNING damage over 5s.',
    wikiLinks: [`https://remnant.wiki/Detonation_Trigger`],
  },
  {
    category: 'amulet',
    name: 'Difference Engine',
    imagePath: '/amulet/difference_engine.png',
    id: '2zr6vu',
    dlc: 'base',
    tags: ['All Damage', 'Lifesteal'],
    description:
      'While a SHIELD is active, All Damage is increased by 20%, and 4.5% of Base Damage dealt is returned as Lifesteal.',
    wikiLinks: [`https://remnant.wiki/Difference_Engine`],
  },
  {
    category: 'amulet',
    name: 'Downward Spiral',
    imagePath: '/amulet/downward_spiral.png',
    id: '1k2x4r',
    dlc: 'base',
    tags: ['Fire Rate', 'Melee Attack Speed', 'Ranged Damage', 'Melee Damage'],
    description: `Increase Fire Rate by 10% and Melee Attack Speed by 15%. For every missing 10% of Max Health, gain 4% Ranged Damage (Max 20%) and 5% Melee Damage (Max 25%)`,
    wikiLinks: [`https://remnant.wiki/Downward_Spiral`],
  },
  {
    category: 'amulet',
    name: 'Echo of the Forest',
    imagePath: '/amulet/echo_of_the_forest.png',
    id: '2VokuK',
    dlc: 'dlc2',
    tags: [],
    description: `On Relic Use, gain GIFT OF THE FOREST for 15s. When Gift of the Forest expires, Relic effect is recast.`,
    wikiLinks: ['https://remnant.wiki/Echo_of_the_Forest'],
  },
  {
    category: 'amulet',
    name: 'Effigy Pendant',
    imagePath: '/amulet/effigy_pendant.png',
    id: 'vkcf4e',
    dlc: 'base',
    tags: ['Grey Health', 'All Damage', 'Damage Reduction'],
    description: `While Grey Health is present, gain 15% to all damage dealt, 10% damage reduction and 1 additional hit before Grey Health is removed.`,
    wikiLinks: [`https://remnant.wiki/Effigy_Pendant`],
  },
  {
    category: 'amulet',
    name: 'Effluvium Enhancer',
    imagePath: '/amulet/effluvium_enhancer.png',
    id: 'kah85t',
    dlc: 'base',
    description: `Increases ACID damage by 20% and CORROSIVE damage by 50%.`,
    wikiLinks: [`https://remnant.wiki/Effluvium_Enhancer`],
  },
  {
    category: 'amulet',
    name: 'Emergency Switch',
    imagePath: '/amulet/emergency_switch.png',
    id: '8dcefr',
    dlc: 'base',
    description:
      'When below 50% Health, chance to consume Relic on use is reduced by 50%. Final Relic Charge is not consumed on use, but effect cannot be triggered again for 30s.',
    wikiLinks: [`https://remnant.wiki/Emergency_Switch`],
  },
  {
    category: 'amulet',
    name: 'Energized Neck Coil',
    imagePath: '/amulet/energized_neck_coil.png',
    id: 'c52jp0',
    dlc: 'base',
    tags: ['Status Effect'],
    description:
      'Increases Status Effect damage by 20%. Directly applying a damaging Status Effect creates a 2m Explosion for 20% of its full damage.\n' +
      '\n' +
      'Each target can be affected once every 5s.',
    externalTokens: [`Amplitude`, `Explosive Damage`],
    wikiLinks: [`https://remnant.wiki/Energized_Neck_Coil`],
  },
  {
    category: 'amulet',
    name: 'Energy Diverter',
    imagePath: '/amulet/energy_diverter.png',
    id: 'evwgwk',
    dlc: 'base',
    tags: ['Critical Chance', 'All Damage'],
    description:
      'While a SHIELD is active, gain 10% Critical Chance and 15% to All Damage dealt.',
    wikiLinks: [`https://remnant.wiki/Energy_Diverter`],
  },
  {
    category: 'amulet',
    name: 'Escalation Protocol',
    imagePath: '/amulet/escalation_protocol.png',
    id: 'vxcn9e',
    dlc: 'base',
    tags: ['All Damage'],
    description: `Increases all damage dealt by 2.5% for 10s after killing an enemy. Stacks 10x. Dealing damage refreshes the timer.`,
    wikiLinks: [`https://remnant.wiki/Escalation_Protocol`],
  },
  {
    category: 'amulet',
    name: 'Fragrant Thorn',
    imagePath: '/amulet/fragrant_thorn.png',
    id: 'Hx5iNF',
    dlc: 'dlc2',
    tags: ['Status Effect', 'All Damage'],
    description:
      'Increases Status Effect Damage by 20%. Inflicting 4 or more unique Negative Status Effects on a target applies EXPOSED for 15s.\n' +
      '\n' +
      'EXPOSED: Target receives 15% additional damage from all sources.',
    wikiLinks: ['https://remnant.wiki/Fragrant_Thorn'],
  },
  {
    category: 'amulet',
    name: 'Full Moon Circlet',
    imagePath: '/amulet/full_moon_circlet.png',
    id: '8xn7hh',
    dlc: 'base',
    tags: ['Lifesteal'],
    description:
      'Ranged damage Lifesteals 3% Base Damage dealt. At full health, Ranged damage is increased by 25%.',
    wikiLinks: [`https://remnant.wiki/Full_Moon_Circlet`],
  },
  {
    category: 'amulet',
    name: 'Gift of Euphoria',
    imagePath: '/amulet/gift_of_euphoria.png',
    dlc: 'dlc1',
    id: '70ryol',
    tags: ['Stamina', 'Critical Chance'],
    description: `Spending 20 Stamina grants 5% Critical Chance for 5s. Max 5 stacks.`,
    wikiLinks: [`https://remnant.wiki/Gift_of_Euphoria`],
  },
  {
    category: 'amulet',
    name: 'Gift of Melancholy',
    imagePath: '/amulet/gift_of_melancholy.png',
    dlc: 'dlc1',
    id: '65851b',
    tags: ['All Damage', 'Stamina'],
    description: `Increases All Damage dealt by 25% when Stamina is at 100% for 7s.`,
    wikiLinks: [`https://remnant.wiki/Gift_of_Melancholy`],
  },
  {
    category: 'amulet',
    name: 'Gift of the Unbound',
    imagePath: '/amulet/gift_of_the_unbound.png',
    dlc: 'dlc1',
    id: 'u7am0w',
    tags: ['Movement Speed'],
    description: `Disables negative effects of Burden Rings and increases Movement Speed by 5% for each Burden lifted. (Max 20%).`,
    wikiLinks: [`https://remnant.wiki/Gift_of_the_Unbound`],
  },
  {
    category: 'amulet',
    name: 'Golden Ribbon',
    imagePath: '/amulet/golden_ribbon.png',
    id: 'm0l0u5',
    dlc: 'base',
    tags: ['Mod Damage'],
    description:
      'Increases Mod damage by 25%. Activating a Mod grants HASTE for 15s.',
    wikiLinks: [`https://remnant.wiki/Golden_Ribbon`],
  },
  {
    category: 'amulet',
    name: 'Gunfire Security Lanyard',
    imagePath: '/amulet/gunfire_security_lanyard.png',
    id: 'wbqua6',
    dlc: 'base',
    tags: ['Reload Speed'],
    description: `Automatically reloads Magazine over time. Does not work for single shot weapons.`,
    wikiLinks: [`https://remnant.wiki/Gunfire_Security_Lanyard`],
  },
  {
    category: 'amulet',
    name: "Gunslinger's Charm",
    imagePath: '/amulet/gunslingers_charm.png',
    id: 'qqg64h',
    dlc: 'base',
    tags: ['Fire Rate', 'Reload Speed'],
    description: `Increases Fire Rate by 15% and Reload Speed by 25%.`,
    wikiLinks: [`https://remnant.wiki/Gunslinger's_Charm`],
  },
  {
    category: 'amulet',
    name: 'Hallowed Egg',
    imagePath: '/amulet/hallowed_egg.png',
    id: 'pfew3v',
    dlc: 'base',
    tags: ['Melee Damage'],
    description:
      "Spending at least 30% of a Firearm's magazine to deal damage increases Melee damage by 10% for 7s. Stacks 5x.",
    wikiLinks: [`https://remnant.wiki/Hallowed_Egg`],
  },
  {
    category: 'amulet',
    name: 'Hyperconductor',
    imagePath: '/amulet/hyperconductor.png',
    id: 'c0z3fy',
    dlc: 'base',
    tags: ['Mod Power'],
    description:
      'Doubles Base Skill Charges but increases all Skill Cooldowns by 25%.\n' +
      '\n' +
      'For Heavy Weapons, doubles Heavy Weapon Base Ammo instead.',
    wikiLinks: [`https://remnant.wiki/Hyperconductor`],
  },
  {
    category: 'amulet',
    name: 'Index of the Scribe',
    imagePath: '/amulet/index_of_the_scribe.png',
    dlc: 'dlc1',
    id: '3lzs0c',
    tags: ['Mod Damage', 'Weakspot Damage'],
    description: `Increases Mod and Skill Weakspot Damage by 35%.`,
    wikiLinks: [`https://remnant.wiki/Index_of_the_Scribe`],
  },
  {
    category: 'amulet',
    name: 'Indignant Fetish',
    imagePath: '/amulet/indignant_fetish.png',
    id: 'dqhstq',
    dlc: 'base',
    tags: ['Damage Reduction', 'All Damage'],
    description:
      'Taking damage from any source increase All Damage dealt by 20% and reduces All Incoming Damage by 10%. Lasts 15s.',
    wikiLinks: [`https://remnant.wiki/Indignant_Fetish`],
  },
  {
    category: 'amulet',
    name: 'Inert Overcharger',
    imagePath: '/amulet/inert_overcharger.png',
    id: 'k8d15f',
    dlc: 'base',
    tags: ['Fire Rate', 'Reload Speed', 'Recoil'],
    description:
      'Standing completely still for 0.5s increases Fire Rate by 20%, Reload Speed by 15%, and reduces Recoil by 50%. Lasts 2s after moving.',
    wikiLinks: [`https://remnant.wiki/Inert_Overcharger`],
  },
  {
    category: 'amulet',
    name: 'Insulation Driver',
    imagePath: '/amulet/insulation_driver.png',
    id: 'k1oijc',
    dlc: 'base',
    tags: ['All Damage'],
    description: `While BULWARK is active, gain 15% to all damage dealt and HASTE.`,
    wikiLinks: [`https://remnant.wiki/Insulation_Driver`],
  },
  {
    category: 'amulet',
    name: "Jester's Bell",
    imagePath: '/amulet/jesters_bell.png',
    id: 'lpv0qq',
    dlc: 'base',
    tags: ['All Damage'],
    description: `Increases Mod and Skill Cast Speed by 35%. Casting a Skill or Mod increases all damage by 15% for 15s.`,
    wikiLinks: [`https://remnant.wiki/Jester's_Bell`],
  },
  {
    category: 'amulet',
    name: 'Kinetic Shield Exchanger',
    imagePath: '/amulet/kinetic_shield_exchanger.png',
    id: 'femylz',
    dlc: 'base',
    tags: ['Mod Damage', 'Mod Power'],
    description: `While a SHIELD is active, gain 25% Mod damage and generate 20% additional Mod power.`,
    wikiLinks: [`https://remnant.wiki/Kinetic_Shield_Exchanger`],
  },
  {
    category: 'amulet',
    name: 'Kuri Kuri Charm',
    imagePath: '/amulet/kuri_kuri_charm.png',
    id: '04yl4w',
    dlc: 'base',
    tags: ['Relic Use Speed'],
    description: `For every 10% of Health missing (Max 50%), gain 10% increased Relic Use Speed and 7% chance to not consume a Relic Charge.`,
    wikiLinks: [`https://remnant.wiki/Kuri_Kuri_Charm`],
  },
  {
    category: 'amulet',
    name: 'Laemir Censer',
    imagePath: '/amulet/laemir_censer.png',
    id: 'hwpkls',
    dlc: 'base',
    tags: ['Mod Cost', 'Mod Duration'],
    description: 'Increases Mod Duration by 50%. Increases Mod Cost by 10%',
    wikiLinks: [`https://remnant.wiki/Laemir_Censer`],
  },
  {
    category: 'amulet',
    name: 'Legacy Protocol',
    imagePath: '/amulet/legacy_protocol1.png',
    id: 'a7axvo',
    dlc: 'base',
    tags: ['Reduce Skill Cooldown', 'Skill Duration'],
    description:
      'Reduces Skill Cooldowns by 20% and increases Skill Duration by 15%.',
    wikiLinks: [`https://remnant.wiki/Legacy_Protocol`],
  },
  {
    category: 'amulet',
    name: "Leto's Amulet",
    imagePath: '/amulet/letos_amulet.png',
    id: 'rpxs8n',
    dlc: 'base',
    tags: ['Encumbrance', 'Stamina'],
    description: `Reduces Encumbrance by 40% and Stamina Cost by 35%.`,
    wikiLinks: [`https://remnant.wiki/Leto's_Amulet`],
    weightPercent: -0.4,
  },
  {
    category: 'amulet',
    name: 'Magnifying Glass',
    imagePath: '/amulet/magnifying_glass.png',
    id: 'zo9Dkk',
    dlc: 'dlc2',
    tags: ['Skill Duration', 'Mod Duration'],
    description: `Increases Skill and Mod Duration by 30% and their AOE or Aura Sizes by 20%.`,
    wikiLinks: ['https://remnant.wiki/Magnifying_Glass'],
  },
  {
    category: 'amulet',
    name: "Matriarch's Insignia",
    imagePath: '/amulet/matriarchs_insignia.png',
    id: 'jlch5h',
    dlc: 'base',
    tags: ['Melee Damage', 'Stamina'],
    description: `Increases Melee Damage by 35% and causes all successful Melee Attacks to restore 10 Stamina.`,
    wikiLinks: [`https://remnant.wiki/Matriarch's_Insignia`],
  },
  {
    category: 'amulet',
    name: 'Moon Stone',
    imagePath: '/amulet/moon_stone.png',
    id: 'zo9Dkd',
    dlc: 'dlc2',
    tags: ['Reload Speed', 'Ranged Damage'],
    description: `Increases Reload Speed by 15%. Every third manual Reload will reload both Firearms and increases Ranged Damage by 15% for 10s.`,
    wikiLinks: ['https://remnant.wiki/Moon_Stone'],
  },
  {
    category: 'amulet',
    name: "Navigator's Pendant",
    imagePath: '/amulet/navigators_pendant.png',
    id: 'pd4ez1',
    dlc: 'base',
    tags: ['Stamina', 'Encumbrance', 'Health'],
    description: `Grants 25 Health, 25 Stamina, and -10 Armor Encumbrance.`,
    wikiLinks: [`https://remnant.wiki/Navigator's_Pendant`],
    health: 25,
    stamina: 25,
    weight: -10,
  },
  {
    category: 'amulet',
    name: 'Neckbone Necklace',
    imagePath: '/amulet/neckbone_necklace.png',
    id: 'r11n5x',
    dlc: 'base',
    tags: ['Status Effect', 'All Damage'],
    description: `Reduces the Damage of Status Effects applied to wearer by 50%. Gain 25% increased Damage when suffering from a Status Effect or Blight.`,
    wikiLinks: [`https://remnant.wiki/Neckbone_Necklace`],
  },
  {
    category: 'amulet',
    name: 'Necklace of Flowing Life',
    imagePath: '/amulet/necklace_of_flowing_life.png',
    id: '8q9cj1',
    dlc: 'base',
    tags: ['Grey Health', 'Mod Power'],
    description: `Increases Grey Health conversion by an additional 100%. When Grey Health Conversion triggers, gain 5x the amount as Mod Power.`,
    wikiLinks: [`https://remnant.wiki/Necklace_of_Flowing_Life`],
  },
  {
    category: 'amulet',
    name: 'Necklace of Supremacy',
    imagePath: '/amulet/necklace_of_supremacy.png',
    id: 'dm67y5',
    dlc: 'base',
    tags: ['All Damage'],
    description:
      'After 5s of not being damaged, increases all damage dealt by 15%. If Health is full, damage bonus increases to 30%.',
    wikiLinks: [`https://remnant.wiki/Necklace_of_Supremacy`],
  },
  {
    category: 'amulet',
    name: 'Nightmare Spiral',
    imagePath: '/amulet/nightmare_spiral.png',
    id: 'mewmtq',
    dlc: 'base',
    tags: ['Lifesteal', 'Heal', 'Healing Effectiveness'],
    description: `Gain 10% of base Ranged damage dealt as Lifesteal. Reduces Healing Effectiveness by 95%.`,
    wikiLinks: [`https://remnant.wiki/Nightmare_Spiral`],
  },
  {
    category: 'amulet',
    name: "Nightweaver's Grudge",
    imagePath: '/amulet/nightweavers_grudge.png',
    id: '0aaso1',
    dlc: 'base',
    tags: ['Critical Chance', 'Status Effect'],
    description: `Gain 15% Critical Chance and HASTE when within 20m of an entity suffering from a Status Effect.`,
    externalTokens: [`Amplitude`],
    wikiLinks: [`https://remnant.wiki/Nightweaver's_Grudge`],
  },
  {
    category: 'amulet',
    name: "Nimue's Ribbon",
    imagePath: '/amulet/nimues_ribbon.png',
    id: 'sqsdvj',
    dlc: 'base',
    tags: ['Healing Effectiveness'],
    description: `Increase Relic Healing Effectiveness by 50% Activating a Relic grants HASTE for 25s.`,
    wikiLinks: [`https://remnant.wiki/Nimue's_Ribbon`],
  },
  {
    category: 'amulet',
    name: 'One True King Sigil',
    imagePath: '/amulet/one_true_king_sigil.png',
    id: 'j5ew1m',
    dlc: 'base',
    tags: ['Mod Damage'],
    description: `Increases Mod damage by 20%. Enhances the effect of Faerin's Sigil and Faelin's Sigil by 50% per Sigil equipped.`,
    wikiLinks: [`https://remnant.wiki/One_True_King_Sigil`],
  },
  {
    category: 'amulet',
    name: 'One-Eyed Joker Idol',
    imagePath: '/amulet/one_eyed_joker_idol.png',
    id: 'yl1ah9',
    dlc: 'base',
    tags: ['Neutral Backdash', 'Critical Chance'],
    description:
      'Neutral Backdash creates a Magic Card lasting 1s. If Card absorbs enemy damage, gain 25% Critical Chance for 5s. Neutral Backdash costs 30% additional Stamina.',
    wikiLinks: [`https://remnant.wiki/One-Eyed_Joker_Idol`],
  },
  {
    category: 'amulet',
    name: 'Onyx Pendulum',
    imagePath: '/amulet/onyx_pendulum.png',
    id: 'ps6umu',
    dlc: 'base',
    tags: ['Ranged Damage'],
    description:
      'Dealing 100 Base Firearm damage adds stacks which multiplies the damage of stowed firearm by 1.02x for 15s. Stacks 10x.',
    externalTokens: [`Multiplicative`],
    wikiLinks: [`https://remnant.wiki/Onyx_Pendulum`],
  },
  {
    category: 'amulet',
    name: 'Participation Medal',
    imagePath: '/amulet/participation_medal1.png',
    id: '588hoi',
    dlc: 'base',
    tags: ['Health', 'Stamina', 'Movement Speed', 'Damage Reduction'],
    description:
      'Increase Health by 10, Stamina by 10, Movement Speed by 10%, and Damage Reduction by 10%.',
    wikiLinks: [`https://remnant.wiki/Participation_Medal`],
    health: 10,
    stamina: 10,
  },
  {
    category: 'amulet',
    name: 'Profane Soul Stone',
    imagePath: '/amulet/profane_soul_stone.png',
    id: 'YsS9NW',
    dlc: 'dlc2',
    tags: ['Summon', 'Damage Reduction', 'Movement Speed'],
    description:
      'Increases Summon Damage by 30% and Summon Movement Speed by 15. Reduces total Damage Reduction by 10% per active Summon.',
    wikiLinks: [`https://remnant.wiki/Profane_Soul_Stone`],
  },
  {
    category: 'amulet',
    name: 'Range Finder',
    imagePath: '/amulet/range_finder.png',
    id: 't7x0op',
    dlc: 'base',
    tags: ['Ranged Damage', 'Weakspot Damage'],
    description:
      'After killing an enemy, gain 10% Ranged damage and 2m Firearm Range. Stacks 3x Lasts 10s. Ranged Weakspot Hits will refresh duration.',
    wikiLinks: [`https://remnant.wiki/Range_Finder`],
  },
  {
    category: 'amulet',
    name: "Ravager's Mark",
    imagePath: '/amulet/ravagers_mark.png',
    id: 'gh0gk6',
    dlc: 'base',
    tags: ['All Damage'],
    description: `Increases all damage dealt to BLEEDING targets by 20%. Bonus increases to 30% for targets with 50% or lower Health.`,
    wikiLinks: [`https://remnant.wiki/Ravager's_Mark`],
  },
  {
    category: 'amulet',
    name: 'Red Doe Sigil',
    imagePath: '/amulet/red_doe_sigil.png',
    id: 'xxp0ri',
    dlc: 'base',
    tags: ['Healing Effectiveness'],
    description: `Increases Relic Healing Effectiveness by 30% which doubles when the wearer's Health is below 50%.`,
    wikiLinks: [`https://remnant.wiki/Red_Doe_Sigil`],
  },
  {
    category: 'amulet',
    name: 'Reed of the Vaunnt',
    imagePath: '/amulet/reed_of_the_vaunnt.png',
    id: 'U2Vekv',
    dlc: 'dlc2',
    tags: ['Mod Power'],
    description: `Activating a Mod increases Mod Generation by 15% for 10s. Mod Charges have 20% chance not to be consumed on use.`,
    wikiLinks: [`https://remnant.wiki/Reed_of_the_Vaunnt`],
  },
  {
    category: 'amulet',
    name: "Rusted Navigator's Pendant",
    imagePath: '/amulet/rusted_navigators_pendant.png',
    id: 'iq6zyc',
    dlc: 'base',
    tags: ['Health', 'Stamina', 'Encumbrance'],
    description: 'Grants 20 Health, 20 Stamina and -15 Armor Encumbrance',
    wikiLinks: [`https://remnant.wiki/Rusted_Navigator's_Pendant`],
    health: 20,
    stamina: 20,
    weight: -15,
  },
  {
    category: 'amulet',
    name: 'Samoflange',
    imagePath: '/amulet/samoflange.png',
    id: 'z7ivk2',
    dlc: 'base',
    tags: ['Damage Reduction'],
    description:
      'Direct damage taken from enemies, and any additional damage within 2s, is reduced by 60%. Once the defensive buff expires, all incoming damage to wearer is increased by 15% for 10s.',
    wikiLinks: [`https://remnant.wiki/Samoflange`],
  },
  {
    category: 'amulet',
    name: "Scavenger's Bauble",
    imagePath: '/amulet/scavengers_bauble.png',
    id: 'j2jso0',
    dlc: 'base',
    description:
      'Increases Scrap pickups by 50%. Automatically pick up any nearby crafting materials.',
    wikiLinks: [`https://remnant.wiki/Scavenger's_Bauble`],
  },
  {
    category: 'amulet',
    name: 'Shaed Bloom Crystal',
    saveFileSlug: `shadebloomfloret`,
    imagePath: '/amulet/shaed_bloom_crystal.png',
    id: 'ib2as6',
    dlc: 'base',
    tags: ['All Damage', 'Elemental Damage'],
    description:
      'Gain a 35% damage bonus. Every 5s, the bonus switches between Physical and Elemental damage.',
    wikiLinks: [`https://remnant.wiki/Shaed_Bloom_Crystal`],
  },
  {
    category: 'amulet',
    name: 'Soul Stone',
    imagePath: '/amulet/soul_stone.png',
    id: 'z7ivk3',
    dlc: 'dlc2',
    tags: ['Summon', 'Movement Speed'],
    description: `Increases Summon Damage by 30% and Summon Movement Speed by 30%.`,
    wikiLinks: [`https://remnant.wiki/Soul_Stone`],
  },
  {
    category: 'amulet',
    name: 'Shock Device',
    imagePath: '/amulet/shock_device.png',
    id: '9z1g8f',
    dlc: 'base',
    description: `Increases SHOCK damage by 20% and OVERLOADED damage by 50%.`,
    wikiLinks: [`https://remnant.wiki/Shock_Device`],
  },
  {
    category: 'amulet',
    name: 'Silver Ribbon',
    imagePath: '/amulet/silver_ribbon.png',
    id: 'k8j2r3',
    dlc: 'base',
    tags: ['Skill Damage'],
    description:
      'Increases Skill damage by 25%. Activating a Skill grants HASTE for 15s.',
    wikiLinks: [`https://remnant.wiki/Silver_Ribbon`],
  },
  {
    category: 'amulet',
    name: 'Sinister Totem',
    imagePath: '/amulet/sinister_totem1.png',
    id: 'qwguja',
    dlc: 'base',
    tags: ['Status Effect'],
    description: `Applying or refreshing a Negative Status Effect to an enemy increases Status Damage by 1% for 15s. Max 50 stacks.`,
    wikiLinks: [`https://remnant.wiki/Sinister_Totem`],
  },
  {
    category: 'amulet',
    name: 'Soul Anchor',
    imagePath: '/amulet/soul_anchor.png',
    id: '6amich',
    dlc: 'base',
    tags: ['Summon', 'All Damage'],
    description:
      'Increase All Damage by 20% while at least 1 Summon is active.',
    wikiLinks: [`https://remnant.wiki/Soul_Anchor`],
  },
  {
    category: 'amulet',
    name: 'Spirit Wisp Amulet',
    imagePath: '/amulet/spirit_wisp_amulet.png',
    id: 'n1y24e',
    dlc: 'base',
    tags: ['Reduce Skill Cooldown', 'Mod Power'],
    description: `Activating a Mod reduces current Skill Cooldowns by 3% for every 300 Mod Power spent.`,
    wikiLinks: [`https://remnant.wiki/Spirit_Wisp_Amulet`],
  },
  {
    category: 'amulet',
    name: "Stalker's Brand",
    imagePath: '/amulet/stalkers_brand.png',
    id: 'rcyafk',
    dlc: 'base',
    tags: ['Ranged Damage', 'Melee Damage'],
    description:
      'Gain 12.5% Ranged and 15% Melee damage. Bonus doubles versus enemies not targeting wearer.',
    wikiLinks: [`https://remnant.wiki/Stalker's_Brand`],
  },
  {
    category: 'amulet',
    name: "Stoneshaper's Chisel",
    imagePath: '/amulet/stoneshapers_chisel.png',
    id: '41ookg',
    dlc: 'dlc2',
    tags: ['All Damage'],
    description: `After not using the primary fire of a weapon for 10s. All Damage is increased by 25%. Primary fire of a weapon instantly cancels the effect.`,
    wikiLinks: [`https://remnant.wiki/Stoneshaper's_Chisel`],
  },
  {
    category: 'amulet',
    name: 'Talisman of the Sun',
    imagePath: '/amulet/talisman_of_the_sun.png',
    id: '8jy9hv',
    dlc: 'base',
    description: `Increases FIRE damage by 20% and BURNING damage by 50%.`,
    wikiLinks: [`https://remnant.wiki/Talisman_of_the_Sun`],
  },
  {
    category: 'amulet',
    name: 'Toxic Release Valve',
    imagePath: '/amulet/toxic_release_valve.png',
    id: 'nevpy5',
    dlc: 'base',
    description:
      'Swapping Firearms releases a Toxic Cloud, which deals 60.5-170.5 ACID Damage to all enemies within 7m and applies CORROSION dealing 280 ACID damage over 7s.\n' +
      '\n' +
      'Can only happen once every 3s.',
    externalTokens: [`Amplitude`],
    wikiLinks: [`https://remnant.wiki/Toxic_Release_Valve`],
  },
  {
    category: 'amulet',
    name: 'Twisted Idol',
    imagePath: '/amulet/twisted_idol.png',
    id: '776kn2',
    dlc: 'base',
    tags: ['Encumbrance', 'Damage Reduction'],
    description: `Increases Armor Effectiveness by 35% and reduces Encumbrance by 20.`,
    wikiLinks: [`https://remnant.wiki/Twisted_Idol`],
    armorPercent: 0.35,
    weight: -15,
  },
  {
    category: 'amulet',
    name: 'Vengeance Idol',
    imagePath: '/amulet/vengeance_idol.png',
    id: '1ucgis',
    dlc: 'base',
    tags: ['All Damage'],
    description: `Increases all damage dealt by 30% when the wearer's Health is below 50%.`,
    wikiLinks: [`https://remnant.wiki/Vengeance_Idol`],
  },
  {
    category: 'amulet',
    name: 'Void Idol',
    imagePath: '/amulet/void_idol.png',
    id: 'rctnex',
    dlc: 'base',
    tags: ['Reload Speed'],
    description:
      'Increases Reload Speed by 30%. Reloads only require 50% of magazine from reserves to fully reload.',
    wikiLinks: [`https://remnant.wiki/Void_Idol`],
  },
  {
    category: 'amulet',
    name: 'Weightless Weight',
    imagePath: '/amulet/weightless_weight.png',
    id: 'b9l389',
    dlc: 'base',
    tags: ['Movement Speed', 'Stamina', 'Encumbrance'],
    description:
      'Increases Movement Speed by 0.75% and reduces Stamina Cost of all actions by 0.75% for every 5 points of Armor Encumbrance.',
    wikiLinks: [`https://remnant.wiki/Weightless_Weight`],
  },
  {
    category: 'amulet',
    name: 'Whispering Marble',
    imagePath: '/amulet/whispering_marble.png',
    id: '2e2hh5',
    dlc: 'base',
    tags: ['Damage Reduction', 'All Damage'],
    description:
      'Grants 3 stacks of BULWARK?. Increases All Damage by 2% per stack of BULWARK.',
    wikiLinks: [`https://remnant.wiki/Whispering_Marble`],
  },
  {
    category: 'amulet',
    name: 'Worn Dog Tags',
    imagePath: '/amulet/worn_dog_tags.png',
    id: '69dogy',
    dlc: 'dlc2',
    tags: ['Fire Rate', 'Reload Speed', 'Charged Shot'],
    description: `Increases Fire Rate and Reload Speed by 15% and Decreases Weapon Charge Time by 15%.`,
    wikiLinks: [`https://remnant.wiki/Worn_Dog_Tags`],
  },
  {
    category: 'amulet',
    name: 'Zero Divide',
    imagePath: '/amulet/zero_divide.png',
    id: 'ryS67y',
    dlc: 'dlc2',
    tags: ['Ammo Reserves', 'Ranged Damage'],
    description: `Gain Infinite Reserve Ammo and increases Ranged Damage by 15%.`,
    wikiLinks: ['https://remnant.wiki/Zero_Divide'],
  },
]
