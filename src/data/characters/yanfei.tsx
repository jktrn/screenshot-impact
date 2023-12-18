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

const Yanfei: Character = {
    name: 'Yanfei',
    icon: '/images/characters/yanfei.png',
    weapon: 'Catalyst',
    vision: 'Pyro',
    rarity: 4,
    description:
        'A well-known legal adviser active in Liyue Harbor. A brilliant young lady in whose veins runs the blood of an illuminated beast.',
    occupation: 'Yanfei Legal Consultancy',
    baseStats: {
        '1/20': {
            'Base HP': 784.0,
            'Base ATK': 20.12,
            'Base DEF': 49.21,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Pyro DMG Bonus': 0.0,
        },
        '20/20': {
            'Base HP': 2014.0,
            'Base ATK': 51.7,
            'Base DEF': 126.43,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Pyro DMG Bonus': 0.0,
        },
        '20/40': {
            'Base HP': 2600.0,
            'Base ATK': 66.73,
            'Base DEF': 163.19,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Pyro DMG Bonus': 0.0,
        },
        '40/40': {
            'Base HP': 3895.0,
            'Base ATK': 99.95,
            'Base DEF': 244.45,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Pyro DMG Bonus': 0.0,
        },
        '40/50': {
            'Base HP': 4311.0,
            'Base ATK': 110.63,
            'Base DEF': 270.57,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Pyro DMG Bonus': 0.06,
        },
        '50/50': {
            'Base HP': 4959.0,
            'Base ATK': 127.26,
            'Base DEF': 311.22,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Pyro DMG Bonus': 0.06,
        },
        '50/60': {
            'Base HP': 5514.0,
            'Base ATK': 141.5,
            'Base DEF': 346.05,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Pyro DMG Bonus': 0.12,
        },
        '60/60': {
            'Base HP': 6161.0,
            'Base ATK': 158.12,
            'Base DEF': 386.7,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Pyro DMG Bonus': 0.12,
        },
        '60/70': {
            'Base HP': 6578.0,
            'Base ATK': 168.8,
            'Base DEF': 412.82,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Pyro DMG Bonus': 0.12,
        },
        '70/70': {
            'Base HP': 7225.0,
            'Base ATK': 185.4,
            'Base DEF': 453.42,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Pyro DMG Bonus': 0.12,
        },
        '70/80': {
            'Base HP': 7641.0,
            'Base ATK': 196.08,
            'Base DEF': 479.55,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Pyro DMG Bonus': 0.18,
        },
        '80/80': {
            'Base HP': 8289.0,
            'Base ATK': 212.71,
            'Base DEF': 520.2,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Pyro DMG Bonus': 0.18,
        },
        '80/90': {
            'Base HP': 8705.0,
            'Base ATK': 223.39,
            'Base DEF': 546.32,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Pyro DMG Bonus': 0.24,
        },
        '90/90': {
            'Base HP': 9352.0,
            'Base ATK': 240.01,
            'Base DEF': 586.97,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Pyro DMG Bonus': 0.24,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Seal of Approval',
            image: 'https://genshin.honeyhunterworld.com/img/s_483101.webp',
            description:
                "Normal Attack\nShoots fireballs that deal up to three counts of\nPyro DMG\n.\nWhen Yanfei's Normal Attacks hit enemies, they will grant her a single Scarlet Seal. Yanfei may possess a maximum of 3 Scarlet Seals, and each time this effect is triggered, the duration of currently possessed Scarlet Seals will refresh.\nEach Scarlet Seal will decrease Yanfei's Stamina consumption and will disappear when she leaves the field.\nCharged Attack\nConsumes Stamina and all Scarlet Seals before dealing\nAoE Pyro DMG\nto opponents after a short casting time.\nThis Charged Attack's AoE and DMG will increase according to the amount of Scarlet Seals consumed.\nPlunging Attack\nGathering the power of Pyro, Yanfei plunges towards the ground from mid-air, damaging all opponents in her path. Deals\nAoE Pyro DMG\nupon impact with the ground.",
            data: {
                '1-Hit DMG': {
                    Lv1: '58.34%',
                    Lv2: '62.72%',
                    Lv3: '67.09%',
                    Lv4: '72.93%',
                    Lv5: '77.3%',
                    Lv6: '81.68%',
                    Lv7: '87.51%',
                    Lv8: '93.35%',
                    Lv9: '99.18%',
                    Lv10: '105.01%',
                    Lv11: '110.85%',
                    Lv12: '116.68%',
                    Lv13: '123.98%',
                    Lv14: '131.27%',
                    Lv15: '138.56%',
                },
                '2-Hit DMG': {
                    Lv1: '52.13%',
                    Lv2: '56.04%',
                    Lv3: '59.94%',
                    Lv4: '65.16%',
                    Lv5: '69.07%',
                    Lv6: '72.98%',
                    Lv7: '78.19%',
                    Lv8: '83.4%',
                    Lv9: '88.61%',
                    Lv10: '93.83%',
                    Lv11: '99.04%',
                    Lv12: '104.25%',
                    Lv13: '110.77%',
                    Lv14: '117.28%',
                    Lv15: '123.8%',
                },
                '3-Hit DMG': {
                    Lv1: '76.01%',
                    Lv2: '81.71%',
                    Lv3: '87.41%',
                    Lv4: '95.02%',
                    Lv5: '100.72%',
                    Lv6: '106.42%',
                    Lv7: '114.02%',
                    Lv8: '121.62%',
                    Lv9: '129.22%',
                    Lv10: '136.82%',
                    Lv11: '144.42%',
                    Lv12: '152.03%',
                    Lv13: '161.53%',
                    Lv14: '171.03%',
                    Lv15: '180.53%',
                },
                'Charged Attack DMG': {
                    Lv1: '98.23% / 115.56% / 132.9% / 150.23% / 167.57%',
                    Lv2: '104.11% / 122.48% / 140.86% / 159.23% / 177.6%',
                    Lv3: '109.99% / 129.4% / 148.81% / 168.23% / 187.64%',
                    Lv4: '117.64% / 138.4% / 159.16% / 179.92% / 200.68%',
                    Lv5: '123.52% / 145.32% / 167.12% / 188.92% / 210.71%',
                    Lv6: '129.4% / 152.24% / 175.08% / 197.91% / 220.75%',
                    Lv7: '137.05% / 161.24% / 185.42% / 209.61% / 233.79%',
                    Lv8: '144.7% / 170.23% / 195.77% / 221.3% / 246.84%',
                    Lv9: '152.34% / 179.23% / 206.11% / 233% / 259.88%',
                    Lv10: '159.99% / 188.22% / 216.46% / 244.69% / 272.92%',
                    Lv11: '167.64% / 197.22% / 226.8% / 256.39% / 285.97%',
                    Lv12: '175.28% / 206.22% / 237.15% / 268.08% / 299.01%',
                    Lv13: '182.93% / 215.21% / 247.49% / 279.78% / 312.06%',
                    Lv14: '190.58% / 224.21% / 257.84% / 291.47% / 325.1%',
                    Lv15: '198.22% / 233.2% / 268.18% / 303.17% / 338.15%',
                },
                'Charged Attack Stamina Cost': {
                    Lv1: '50',
                    Lv2: '50',
                    Lv3: '50',
                    Lv4: '50',
                    Lv5: '50',
                    Lv6: '50',
                    Lv7: '50',
                    Lv8: '50',
                    Lv9: '50',
                    Lv10: '50',
                    Lv11: '50',
                    Lv12: '50',
                    Lv13: '50',
                    Lv14: '50',
                    Lv15: '50',
                },
                'Scarlet Seal Stamina Consumption Decrease': {
                    Lv1: '15% Per Seal',
                    Lv2: '15% Per Seal',
                    Lv3: '15% Per Seal',
                    Lv4: '15% Per Seal',
                    Lv5: '15% Per Seal',
                    Lv6: '15% Per Seal',
                    Lv7: '15% Per Seal',
                    Lv8: '15% Per Seal',
                    Lv9: '15% Per Seal',
                    Lv10: '15% Per Seal',
                    Lv11: '15% Per Seal',
                    Lv12: '15% Per Seal',
                    Lv13: '15% Per Seal',
                    Lv14: '15% Per Seal',
                    Lv15: '15% Per Seal',
                },
                'Scarlet Seal Duration': {
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
            name: 'Signed Edict',
            image: 'https://genshin.honeyhunterworld.com/img/s_483201.webp',
            description:
                "Summons blistering flames that deal\nAoE Pyro DMG\n.\nOpponents hit by the flames will grant Yanfei the maximum number of Scarlet Seals.\nApart from their legal uses, Yanfei's seals also come with her customized additional terms and conditions. Well, it's not as if the Ministry of Civil Affairs can change the laws of nature.",
            data: {
                'Skill DMG': {
                    Lv1: '169.6%',
                    Lv2: '182.32%',
                    Lv3: '195.04%',
                    Lv4: '212%',
                    Lv5: '224.72%',
                    Lv6: '237.44%',
                    Lv7: '254.4%',
                    Lv8: '271.36%',
                    Lv9: '288.32%',
                    Lv10: '305.28%',
                    Lv11: '322.24%',
                    Lv12: '339.2%',
                    Lv13: '360.4%',
                    Lv14: '381.6%',
                    Lv15: '402.8%',
                },
                CD: {
                    Lv1: '9s',
                    Lv2: '9s',
                    Lv3: '9s',
                    Lv4: '9s',
                    Lv5: '9s',
                    Lv6: '9s',
                    Lv7: '9s',
                    Lv8: '9s',
                    Lv9: '9s',
                    Lv10: '9s',
                    Lv11: '9s',
                    Lv12: '9s',
                    Lv13: '9s',
                    Lv14: '9s',
                    Lv15: '9s',
                },
            },
        },
        {
            name: 'Done Deal',
            image: 'https://genshin.honeyhunterworld.com/img/s_483901.webp',
            description:
                'Triggers a spray of intense flames that rush at nearby opponents, dealing\nAoE Pyro DMG\n, granting Yanfei the maximum number of Scarlet Seals, and applying Brilliance to her.\nBrilliance\nHas the following effects:\n\u00b7Grants Yanfei a Scarlet Seal at fixed intervals.\n\u00b7Increases the DMG dealt by her Charged Attacks.\nThe effects of Brilliance will end if Yanfei leaves the field or falls in battle.\n"Here are the full terms for this matter of life and death \u2014 by which I mean my life and your death!"',
            data: {
                'Skill DMG': {
                    Lv1: '182.4%',
                    Lv2: '196.08%',
                    Lv3: '209.76%',
                    Lv4: '228%',
                    Lv5: '241.68%',
                    Lv6: '255.36%',
                    Lv7: '273.6%',
                    Lv8: '291.84%',
                    Lv9: '310.08%',
                    Lv10: '328.32%',
                    Lv11: '346.56%',
                    Lv12: '364.8%',
                    Lv13: '387.6%',
                    Lv14: '410.4%',
                    Lv15: '433.2%',
                },
                'Scarlet Seal Grant Interval': {
                    Lv1: '1s',
                    Lv2: '1s',
                    Lv3: '1s',
                    Lv4: '1s',
                    Lv5: '1s',
                    Lv6: '1s',
                    Lv7: '1s',
                    Lv8: '1s',
                    Lv9: '1s',
                    Lv10: '1s',
                    Lv11: '1s',
                    Lv12: '1s',
                    Lv13: '1s',
                    Lv14: '1s',
                    Lv15: '1s',
                },
                'Charged Attack DMG Bonus': {
                    Lv1: '33.4%',
                    Lv2: '35.4%',
                    Lv3: '37.4%',
                    Lv4: '40%',
                    Lv5: '42%',
                    Lv6: '44%',
                    Lv7: '46.6%',
                    Lv8: '49.2%',
                    Lv9: '51.8%',
                    Lv10: '54.4%',
                    Lv11: '57%',
                    Lv12: '59.6%',
                    Lv13: '62.2%',
                    Lv14: '64.8%',
                    Lv15: '67.4%',
                },
                Duration: {
                    Lv1: '15s',
                    Lv2: '15s',
                    Lv3: '15s',
                    Lv4: '15s',
                    Lv5: '15s',
                    Lv6: '15s',
                    Lv7: '15s',
                    Lv8: '15s',
                    Lv9: '15s',
                    Lv10: '15s',
                    Lv11: '15s',
                    Lv12: '15s',
                    Lv13: '15s',
                    Lv14: '15s',
                    Lv15: '15s',
                },
                CD: {
                    Lv1: '20s',
                    Lv2: '20s',
                    Lv3: '20s',
                    Lv4: '20s',
                    Lv5: '20s',
                    Lv6: '20s',
                    Lv7: '20s',
                    Lv8: '20s',
                    Lv9: '20s',
                    Lv10: '20s',
                    Lv11: '20s',
                    Lv12: '20s',
                    Lv13: '20s',
                    Lv14: '20s',
                    Lv15: '20s',
                },
                'Energy Cost': {
                    Lv1: '80',
                    Lv2: '80',
                    Lv3: '80',
                    Lv4: '80',
                    Lv5: '80',
                    Lv6: '80',
                    Lv7: '80',
                    Lv8: '80',
                    Lv9: '80',
                    Lv10: '80',
                    Lv11: '80',
                    Lv12: '80',
                    Lv13: '80',
                    Lv14: '80',
                    Lv15: '80',
                },
            },
        },
    ],
    passiveSkills: [
        {
            name: 'Encyclopedic Expertise',
            image: 'https://genshin.honeyhunterworld.com/img/p_482301.webp',
            description:
                'Displays the location of nearby\nresources unique to Liyue\non the mini-map.',
        },
        {
            name: 'Proviso',
            image: 'https://genshin.honeyhunterworld.com/img/p_482101.webp',
            description:
                "When Yanfei consumes Scarlet Seals by using a Charged Attack, each Scarlet Seal will increase Yanfei's\nPyro DMG Bonus\nby 5%. This effect lasts for 6s. When a Charged Attack is used again during the effect's duration, it will dispel the previous effect.",
        },
        {
            name: 'Blazing Eye',
            image: 'https://genshin.honeyhunterworld.com/img/p_482201.webp',
            description:
                "When Yanfei's Charged Attack deals a CRIT Hit to opponents, she will deal an additional instance of\nAoE Pyro DMG\nequal to 80% of her ATK. This DMG counts as Charged Attack DMG.",
        },
    ],
    constellations: [
        {
            name: 'The Law Knows No Kindness',
            image: 'https://genshin.honeyhunterworld.com/img/c_481.webp',
            description:
                'When Yanfei uses her Charged Attack, each existing Scarlet Seal additionally reduces the stamina cost of this Charged Attack by 10% and increases resistance against interruption during its release.',
            level: 1,
        },
        {
            name: 'Right of Final Interpretation',
            image: 'https://genshin.honeyhunterworld.com/img/c_482.webp',
            description:
                "Increases Yanfei's Charged Attack CRIT Rate by 20% against enemies below 50% HP.",
            level: 2,
        },
        {
            name: 'Samadhi Fire-Forged',
            image: 'https://genshin.honeyhunterworld.com/img/c_483.webp',
            description:
                'Increases the Level of\nSigned Edict\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Supreme Amnesty',
            image: 'https://genshin.honeyhunterworld.com/img/c_484.webp',
            description:
                "When\nDone Deal\nis used:\nCreates a shield that absorbs up to 45% of Yanfei's Max HP for 15s.\nThis shield absorbs\nPyro DMG\n250% more effectively.",
            level: 4,
        },
        {
            name: 'Abiding Affidavit',
            image: 'https://genshin.honeyhunterworld.com/img/c_485.webp',
            description:
                'Increases the Level of\nDone Deal\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Extra Clause',
            image: 'https://genshin.honeyhunterworld.com/img/c_486.webp',
            description: 'Increases the maximum number of Scarlet Seals by 1.',
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Yanfei
