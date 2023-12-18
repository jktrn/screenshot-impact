import { TalentScaling, Bonus, Character } from '@/interfaces/Character'

const talentScalings: TalentScaling = {
    // ...
}

const characterBonuses: Bonus[] = [
    // ...
]

const constellationBonuses: Bonus[] = [
    // ...
]

const ShikanoinHeizou: Character = {
    name: 'Shikanoin Heizou',
    icon: '/images/characters/shikanoin-heizou.png',
    weapon: 'Catalyst',
    vision: 'Anemo',
    rarity: 4,
    description:
        'A young prodigy detective from the Tenryou Commission. His senses are sharp and his thoughts are clear.',
    occupation: 'Tenryou Commission',
    baseStats: {
        '1/20': {
            'Base HP': 894.0,
            'Base ATK': 18.88,
            'Base DEF': 57.34,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.0,
        },
        '20/20': {
            'Base HP': 2296.0,
            'Base ATK': 48.49,
            'Base DEF': 147.31,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.0,
        },
        '20/40': {
            'Base HP': 2963.0,
            'Base ATK': 62.6,
            'Base DEF': 190.14,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.0,
        },
        '40/40': {
            'Base HP': 4438.0,
            'Base ATK': 93.76,
            'Base DEF': 284.81,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.0,
        },
        '40/50': {
            'Base HP': 4913.0,
            'Base ATK': 103.78,
            'Base DEF': 315.24,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.06,
        },
        '50/50': {
            'Base HP': 5651.0,
            'Base ATK': 119.37,
            'Base DEF': 362.61,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.06,
        },
        '50/60': {
            'Base HP': 6283.0,
            'Base ATK': 132.73,
            'Base DEF': 403.19,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.12,
        },
        '60/60': {
            'Base HP': 7021.0,
            'Base ATK': 148.32,
            'Base DEF': 450.55,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.12,
        },
        '60/70': {
            'Base HP': 7495.0,
            'Base ATK': 158.34,
            'Base DEF': 480.99,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.12,
        },
        '70/70': {
            'Base HP': 8233.0,
            'Base ATK': 173.92,
            'Base DEF': 528.29,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.12,
        },
        '70/80': {
            'Base HP': 8707.0,
            'Base ATK': 183.94,
            'Base DEF': 558.73,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.18,
        },
        '80/80': {
            'Base HP': 9445.0,
            'Base ATK': 199.53,
            'Base DEF': 606.09,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.18,
        },
        '80/90': {
            'Base HP': 9919.0,
            'Base ATK': 209.55,
            'Base DEF': 636.52,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.24,
        },
        '90/90': {
            'Base HP': 10657.0,
            'Base ATK': 225.14,
            'Base DEF': 683.89,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.24,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Fudou Style Martial Arts',
            image: 'https://genshin.honeyhunterworld.com/img/s_593101.webp',
            description:
                'Normal Attack\nPerforms up to 5 fisticuffs empowered by a mighty wind, dealing\nAnemo DMG\n.\nCharged Attack\nConsumes a certain amount of Stamina and performs a sweeping kick that deals\nAnemo DMG\n.\nPlunging Attack\nCalling upon the surging wind, Heizou plunges towards the ground from mid-air, damaging all opponents in his path. Deals\nAoE Anemo DMG\nupon impact with the ground.',
            data: {
                '1-Hit DMG': {
                    Lv1: '37.47%',
                    Lv2: '40.28%',
                    Lv3: '43.09%',
                    Lv4: '46.84%',
                    Lv5: '49.65%',
                    Lv6: '52.46%',
                    Lv7: '56.21%',
                    Lv8: '59.96%',
                    Lv9: '63.71%',
                    Lv10: '67.45%',
                    Lv11: '71.2%',
                    Lv12: '74.95%',
                    Lv13: '79.63%',
                    Lv14: '84.32%',
                    Lv15: '89%',
                },
                '2-Hit DMG': {
                    Lv1: '36.85%',
                    Lv2: '39.62%',
                    Lv3: '42.38%',
                    Lv4: '46.06%',
                    Lv5: '48.83%',
                    Lv6: '51.59%',
                    Lv7: '55.28%',
                    Lv8: '58.96%',
                    Lv9: '62.65%',
                    Lv10: '66.33%',
                    Lv11: '70.02%',
                    Lv12: '73.7%',
                    Lv13: '78.31%',
                    Lv14: '82.92%',
                    Lv15: '87.52%',
                },
                '3-Hit DMG': {
                    Lv1: '51.06%',
                    Lv2: '54.89%',
                    Lv3: '58.72%',
                    Lv4: '63.82%',
                    Lv5: '67.65%',
                    Lv6: '71.48%',
                    Lv7: '76.59%',
                    Lv8: '81.7%',
                    Lv9: '86.8%',
                    Lv10: '91.91%',
                    Lv11: '97.01%',
                    Lv12: '102.12%',
                    Lv13: '108.5%',
                    Lv14: '114.88%',
                    Lv15: '121.27%',
                },
                '4-Hit DMG': {
                    Lv1: '50.26%',
                    Lv2: '54.03%',
                    Lv3: '57.80%',
                    Lv4: '62.83%',
                    Lv5: '66.60%',
                    Lv6: '70.37%',
                    Lv7: '75.39%',
                    Lv8: '80.42%',
                    Lv9: '85.44%',
                    Lv10: '90.47%',
                    Lv11: '95.50%',
                    Lv12: '100.52%',
                    Lv13: '106.80%',
                    Lv14: '113.09%',
                    Lv15: '119.37%',
                },
                '5-Hit DMG': {
                    Lv1: '61.45%',
                    Lv2: '66.06%',
                    Lv3: '70.67%',
                    Lv4: '76.81%',
                    Lv5: '81.42%',
                    Lv6: '86.03%',
                    Lv7: '92.17%',
                    Lv8: '98.32%',
                    Lv9: '104.46%',
                    Lv10: '110.61%',
                    Lv11: '116.75%',
                    Lv12: '122.9%',
                    Lv13: '130.58%',
                    Lv14: '138.26%',
                    Lv15: '145.94%',
                },
                'Charged Attack DMG': {
                    Lv1: '73%',
                    Lv2: '78.47%',
                    Lv3: '83.95%',
                    Lv4: '91.25%',
                    Lv5: '96.72%',
                    Lv6: '102.2%',
                    Lv7: '109.5%',
                    Lv8: '116.8%',
                    Lv9: '124.1%',
                    Lv10: '131.4%',
                    Lv11: '138.7%',
                    Lv12: '146%',
                    Lv13: '155.12%',
                    Lv14: '164.25%',
                    Lv15: '173.37%',
                },
                'Charged Attack Stamina Cost': {
                    Lv1: '25',
                    Lv2: '25',
                    Lv3: '25',
                    Lv4: '25',
                    Lv5: '25',
                    Lv6: '25',
                    Lv7: '25',
                    Lv8: '25',
                    Lv9: '25',
                    Lv10: '25',
                    Lv11: '25',
                    Lv12: '25',
                    Lv13: '25',
                    Lv14: '25',
                    Lv15: '25',
                },
                'Plunge DMG': {
                    Lv1: '56.83%',
                    Lv2: '61.45%',
                    Lv3: '66.08%',
                    Lv4: '72.69%',
                    Lv5: '77.31%',
                    Lv6: '82.6%',
                    Lv7: '89.87%',
                    Lv8: '97.14%',
                    Lv9: '104.41%',
                    Lv10: '112.34%',
                    Lv11: '120.27%',
                    Lv12: '128.2%',
                    Lv13: '136.12%',
                    Lv14: '144.05%',
                    Lv15: '151.98%',
                },
                'Low Plunge DMG': {
                    Lv1: '113.63%',
                    Lv2: '122.88%',
                    Lv3: '132.13%',
                    Lv4: '145.35%',
                    Lv5: '154.59%',
                    Lv6: '165.16%',
                    Lv7: '179.7%',
                    Lv8: '194.23%',
                    Lv9: '208.77%',
                    Lv10: '224.62%',
                    Lv11: '240.48%',
                    Lv12: '256.34%',
                    Lv13: '272.19%',
                    Lv14: '288.05%',
                    Lv15: '303.9%',
                },
                'High Plunge DMG': {
                    Lv1: '141.93%',
                    Lv2: '153.49%',
                    Lv3: '165.04%',
                    Lv4: '181.54%',
                    Lv5: '193.1%',
                    Lv6: '206.3%',
                    Lv7: '224.45%',
                    Lv8: '242.61%',
                    Lv9: '260.76%',
                    Lv10: '280.57%',
                    Lv11: '300.37%',
                    Lv12: '320.18%',
                    Lv13: '339.98%',
                    Lv14: '359.79%',
                    Lv15: '379.59%',
                },
            },
        },
        {
            name: 'Heartstopper Strike',
            image: 'https://genshin.honeyhunterworld.com/img/s_593201.webp',
            description:
                "Tap\nWields the swift winds to launch a Heartstopper Strike that deals\nAnemo DMG\n.\nHold\nCharges energy to unleash an even stronger blow. He will obtain the Declension effect while charging, which will increase the power of the Heartstopper Strike. When the skill button is released or the skill finishes charging, he will strike forward, dealing\nAnemo DMG\n.\nDeclension\nIncreases the power of the next Heartstopper Strike. Max 4 stacks.\nWhen you possess 4 Declension stacks, the Conviction effect will be produced, which will cause the next Heartstopper Strike to be even stronger and have a larger AoE.\nThis seemingly ordinary strike contains Heizou's desire for criminals to honestly confess and repent.",
            data: {
                'Skill DMG': {
                    Lv1: '227.52%',
                    Lv2: '244.58%',
                    Lv3: '261.65%',
                    Lv4: '284.4%',
                    Lv5: '301.46%',
                    Lv6: '318.53%',
                    Lv7: '341.28%',
                    Lv8: '364.03%',
                    Lv9: '386.78%',
                    Lv10: '409.54%',
                    Lv11: '432.29%',
                    Lv12: '455.04%',
                    Lv13: '483.48%',
                    Lv14: '511.92%',
                    Lv15: '540.36%',
                },
                'Declension DMG Bonus': {
                    Lv1: '56.88% / stack',
                    Lv2: '61.15% / stack',
                    Lv3: '65.41% / stack',
                    Lv4: '71.1% / stack',
                    Lv5: '75.37% / stack',
                    Lv6: '79.63% / stack',
                    Lv7: '85.32% / stack',
                    Lv8: '91.01% / stack',
                    Lv9: '96.7% / stack',
                    Lv10: '102.38% / stack',
                    Lv11: '108.07% / stack',
                    Lv12: '113.76% / stack',
                    Lv13: '120.87% / stack',
                    Lv14: '127.98% / stack',
                    Lv15: '135.09% / stack',
                },
                'Conviction DMG Bonus': {
                    Lv1: '113.76%',
                    Lv2: '122.29%',
                    Lv3: '130.82%',
                    Lv4: '142.2%',
                    Lv5: '150.73%',
                    Lv6: '159.26%',
                    Lv7: '170.64%',
                    Lv8: '182.02%',
                    Lv9: '193.39%',
                    Lv10: '204.77%',
                    Lv11: '216.14%',
                    Lv12: '227.52%',
                    Lv13: '241.74%',
                    Lv14: '255.96%',
                    Lv15: '270.18%',
                },
                'Declension Duration': {
                    Lv1: '60s',
                    Lv2: '60s',
                    Lv3: '60s',
                    Lv4: '60s',
                    Lv5: '60s',
                    Lv6: '60s',
                    Lv7: '60s',
                    Lv8: '60s',
                    Lv9: '60s',
                    Lv10: '60s',
                    Lv11: '60s',
                    Lv12: '60s',
                    Lv13: '60s',
                    Lv14: '60s',
                    Lv15: '60s',
                },
                CD: {
                    Lv1: '10s',
                    Lv2: '10s',
                    Lv3: '10s',
                    Lv4: '10s',
                    Lv5: '10s',
                    Lv6: '10s',
                    Lv7: '10s',
                    Lv8: '10s',
                    Lv9: '10s',
                    Lv10: '10s',
                    Lv11: '10s',
                    Lv12: '10s',
                    Lv13: '10s',
                    Lv14: '10s',
                    Lv15: '10s',
                },
            },
        },
        {
            name: 'Windmuster Kick',
            image: 'https://genshin.honeyhunterworld.com/img/s_593901.webp',
            description:
                "Leaps into the air and uses the Fudou Style Vacuum Slugger and kicks his opponent. The Vacuum Slugger will explode upon hit and create an Arresting Windtunnel that pulls in nearby objects and opponents, dealing\nAoE Anemo DMG\n.\nWhen Vacuum Slugger hits opponents affected by\nHydro\n/\nPyro\n/\nCryo\n/\nElectro\n, these opponents will be afflicted with Windmuster Iris. This Windmuster Iris will explode after a moment and dissipate, dealing AoE DMG of the corresponding aforementioned elemental type.\nVacuum Slugger can afflict a maximum of 4 opponents with the Windmuster Iris. A single opponent cannot be under the effect of Windmuster Irises of different elements at the same time.\nA unique technique that gathers Anemo in one place before unleashing it all in one kick. Is always there in a pinch to land on some criminal's fleeing back.",
            data: {
                'Fudou Style Vacuum Slugger DMG': {
                    Lv1: '314.69%',
                    Lv2: '338.29%',
                    Lv3: '361.89%',
                    Lv4: '393.36%',
                    Lv5: '416.96%',
                    Lv6: '440.56%',
                    Lv7: '472.03%',
                    Lv8: '503.5%',
                    Lv9: '534.97%',
                    Lv10: '566.44%',
                    Lv11: '597.91%',
                    Lv12: '629.38%',
                    Lv13: '668.71%',
                    Lv14: '708.05%',
                    Lv15: '747.38%',
                },
                'Windmuster Iris DMG': {
                    Lv1: '21.46%',
                    Lv2: '23.07%',
                    Lv3: '24.67%',
                    Lv4: '26.82%',
                    Lv5: '28.43%',
                    Lv6: '30.04%',
                    Lv7: '32.18%',
                    Lv8: '34.33%',
                    Lv9: '36.48%',
                    Lv10: '38.62%',
                    Lv11: '40.77%',
                    Lv12: '42.91%',
                    Lv13: '45.59%',
                    Lv14: '48.28%',
                    Lv15: '50.96%',
                },
                CD: {
                    Lv1: '12s',
                    Lv2: '12s',
                    Lv3: '12s',
                    Lv4: '12s',
                    Lv5: '12s',
                    Lv6: '12s',
                    Lv7: '12s',
                    Lv8: '12s',
                    Lv9: '12s',
                    Lv10: '12s',
                    Lv11: '12s',
                    Lv12: '12s',
                    Lv13: '12s',
                    Lv14: '12s',
                    Lv15: '12s',
                },
                'Energy Cost': {
                    Lv1: '40',
                    Lv2: '40',
                    Lv3: '40',
                    Lv4: '40',
                    Lv5: '40',
                    Lv6: '40',
                    Lv7: '40',
                    Lv8: '40',
                    Lv9: '40',
                    Lv10: '40',
                    Lv11: '40',
                    Lv12: '40',
                    Lv13: '40',
                    Lv14: '40',
                    Lv15: '40',
                },
            },
        },
    ],
    passiveSkills: [
        {
            name: 'Pre-Existing Guilt',
            image: 'https://genshin.honeyhunterworld.com/img/p_592301.webp',
            description:
                'Decreases sprinting Stamina consumption for your own party members by 20%.\nNot stackable with Passive Talents that provide the exact same effects.',
        },
        {
            name: 'Paradoxical Practice',
            image: 'https://genshin.honeyhunterworld.com/img/p_592101.webp',
            description:
                'When Shikanoin Heizou activates a Swirl reaction while on the field, he will gain 1 Declension stack for\nHeartstopper Strike\n. This effect can be triggered once every 0.1s.',
        },
        {
            name: 'Penetrative Reasoning',
            image: 'https://genshin.honeyhunterworld.com/img/p_592201.webp',
            description:
                "After Shikanoin Heizou's\nHeartstopper Strike\nhits an opponent, increases all party members' (excluding Shikanoin Heizou) Elemental Mastery by 80 for 10s.",
        },
    ],
    constellations: [
        {
            name: 'Named Juvenile Casebook',
            image: 'https://genshin.honeyhunterworld.com/img/c_591.webp',
            description:
                'For 5s after Shikanoin Heizou takes the field, his Normal Attack SPD is increased by 15%. He also gains 1 Declension stack for\nHeartstopper Strike\n. This effect can be triggered once every 10s.',
            level: 1,
        },
        {
            name: 'Investigative Collection',
            image: 'https://genshin.honeyhunterworld.com/img/c_592.webp',
            description:
                'The pull effect of the Arresting Windtunnel created by\nWindmuster Kick\nis enhanced, and its duration is increased to 1s.',
            level: 2,
        },
        {
            name: 'Esoteric Puzzle Book',
            image: 'https://genshin.honeyhunterworld.com/img/c_593.webp',
            description:
                'Increases the Level of\nHeartstopper Strike\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Tome of Lies',
            image: 'https://genshin.honeyhunterworld.com/img/c_594.webp',
            description:
                'The first Windmuster Iris explosion in each\nWindmuster Kick\nwill regenerate 9 Elemental Energy for Shikanoin Heizou. Every subsequent explosion in that Windmuster Kick will each regenerate an additional 1.5 Energy for Heizou.\nOne\nWindmuster Kick\ncan regenerate a total of 13.5 Energy for Heizou in this manner.',
            level: 4,
        },
        {
            name: 'Secret Archive',
            image: 'https://genshin.honeyhunterworld.com/img/c_595.webp',
            description:
                'Increases the Level of\nWindmuster Kick\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Curious Casefiles',
            image: 'https://genshin.honeyhunterworld.com/img/c_596.webp',
            description:
                "Each Declension stack will increase the CRIT Rate of the\nHeartstopper Strike\nunleashed by 4%. When Heizou possesses Conviction, this Heartstopper Strike's CRIT DMG is increased by 32%.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default ShikanoinHeizou
