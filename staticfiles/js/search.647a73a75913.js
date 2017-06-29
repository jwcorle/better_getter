function handler(item) {
  if (valid_item(item)) {
    window.location.href = "/get_item/" + item;
  } else {
    err_item();
  }
}

function err_item() {
  $('.typeahead').addClass('err');
  $('.typeahead').addClass('err-animation');

  setTimeout(function() {
    $('.typeahead').removeClass('err-animation');
  }, 1000);
}

function valid_item(item) {
  if (valid_items.includes(item)) {
    return true;
  }

  return false;
}

var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    matches = [];

    substrRegex = new RegExp(q, 'i');

    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

$( document ).ready(function() {
  $('.typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'valid_items',
    source: substringMatcher(valid_items)
  }).bind('typeahead:select', function(ev, suggestion) {
    if ( !$(this).hasClass("no-redirect") ) {
      handler(suggestion);
    }
  });

  $('.typeahead').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      handler($(this).typeahead('val'));
    }
  });

  (function($) {
    $.fn.clickToggle = function(func1, func2) {
      var funcs = [func1, func2];
      this.data('toggleclicked', 0);
      this.click(function() {
        var data = $(this).data();
        var tc = data.toggleclicked;
        $.proxy(funcs[tc], this)();
        data.toggleclicked = (tc + 1) % 2;
      });
      return this;
    };
  }(jQuery));

  $( '.order' ).next().hide();

  $( '.order' ).clickToggle(function() {
    $(this).next().show();
    $(this).children().first().children().first().removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-down");
  }, function() {
    $(this).children().first().children().first().removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-right");
    $(this).next().hide();
  });
});

var valid_items = ["Akbronco Prime Blueprint", "Akbronco Prime Link", "Ankyros Prime Blade", "Ankyros Prime Blueprint", "Ankyros Prime Gauntlet", "Bo Prime Blueprint", "Bo Prime Handle", "Bo Prime Ornament", "Boar Prime Barrel", "Boar Prime Blueprint", "Boar Prime Receiver", "Boar Prime Stock", "Boltor Prime Barrel", "Boltor Prime Blueprint", "Boltor Prime Reciever", "Boltor Prime Stock", "Braton Prime Barrel", "Braton Prime Blueprint", "Braton Prime Receiver", "Braton Prime Stock", "Bronco Prime Barrel", "Bronco Prime Blueprint", "Bronco Prime Receiver", "Burston Prime Barrel", "Burston Prime Blueprint", "Burston Prime Receiver", "Burston Prime Stock", "Dakra Prime Blade", "Dakra Prime Blueprint", "Dakra Prime Handle", "Fang Prime Blade", "Fang Prime Blueprint", "Fang Prime Handle", "Glaive Prime Blade", "Glaive Prime Blueprint", "Glaive Prime Disc", "Hikou Prime Blueprint", "Hikou Prime Pouch", "Hikou Prime Stars", "Latron Prime Barrel", "Latron Prime Blueprint", "Latron Prime Receiver", "Latron Prime Stock", "Lex Prime Barrel", "Lex Prime Blueprint", "Lex Prime Reciever", "Orthos Prime Blade", "Orthos Prime Blueprint", "Orthos Prime Handle", "Paris Prime Grip", "Paris Prime Lower Limb", "Paris Prime Blueprint", "Paris Prime String", "Paris Prime Upper Limb", "Reaper Prime Blade", "Reaper Prime Blueprint", "Reaper Prime Handle", "Scindo Prime Blade", "Scindo Prime Blueprint", "Scindo Prime Handle", "Sicarus Prime Barrel", "Sicarus Prime Blueprint", "Sicarus Prime Receiver", "Soma Prime Barrel", "Soma Prime Blueprint", "Soma Prime Receiver", "Soma Prime Stock", "Vasto Prime Barrel", "Vasto Prime Blueprint", "Vasto Prime Receiver", "Nova Prime Neuroptics", "Nova Prime Chassis", "Nova Prime Systems", "Nova Prime Blueprint", "Frost Prime Neuroptics", "Ember Prime Neuroptics", "Mag Prime Neuroptics", "Rhino Prime Neuroptics", "Loki Prime Neuroptics", "Nyx Prime Neuroptics", "Nyx Prime Blueprint", "Nyx Prime Chassis", "Loki Prime Systems", "Loki Prime Chassis", "Nyx Prime Systems", "Rhino Prime Blueprint", "Rhino Prime Chassis", "Frost Prime Systems", "Ember Prime Systems", "Mag Prime Systems", "Loki Prime Blueprint", "Frost Prime Chassis", "Ember Prime Chassis", "Rhino Prime Systems", "Frost Prime Blueprint", "Ember Prime Blueprint", "Mag Prime Blueprint", "Mag Prime Chassis", "Hammer Shot", "Malignant Force", "Seeking Force", "Hollowed Bullets", "Flame Repellent", "Bleeding Edge", "Shred", "Target Cracker", "Serration", "Shock Absorbers", "Fleeting Expertise", "Quick Return", "Narrow Minded", "Lightning Rod", "Sure Shot", "Rage", "Critical Delay", "Bane of Grineer", "Eroding Blight", "Ruinous Extension", "Savagery", "Energy Inversion", "Expel Infested", "Reflex Guard", "Shattering Justice", "Warrior", "Jolt", "Ferocity", "Automatic Trigger", "Cryo Rounds", "Frostbite", "Vicious Frost", "Auxiliary Power", "Jagged Edge", "Scavenge", "Slip Magazine", "Dead Eye", "Gunslinger", "Pacifying Bolts", "Sundering Weave", "Energy Amplifier", "Transient Fortitude", "Lasting Purity", "Magazine Extension", "Searing Steel", "Toxic Blight", "Fatal Acceleration", "Melee Prowess", "Entropy Spike", "Chilling Grasp", "Rending Crane", "Point Blank", "Bane of Infested", "Shocking Touch", "Tranquil Cleave", "Greedy Pull", "Intensify", "Combustion Rounds", "Sprint Boost", "Sniper Ammo Mutation", "Pistol Gambit", "Quickdraw", "Blind Rage", "Divebomb Vortex", "Maglev", "Shield Disruption", "Corrosive Projection", "Rifle Ammo Mutation", "Heavy Trauma", "Magnum Force", "Power Throw", "Gleaming Blight", "Overextended", "Sanctuary", "Superior Defenses", "Cutting Edge", "Contagious Spread", "Vile Acceleration", "Diamond Skin", "Bite", "Shotgun Savvy", "Cleanse Grineer", "Redirection", "Swift Deth", "Hunt", "Toxic Sequence", "Hall of Malevolence", "Volcanic Edge", "Smite Grineer", "Firestorm", "Bane of Corpus", "Berserker", "Handspring", "Venom Dose", "Magma Chamber", "Unleashed", "Entropy Flight", "Eleventh Storm", "Trick Mag", "Rebound", "Reach", "Neutron Star", "Point Strike", "Scattered Justice", "Vile Precision", "Loot Detector", "Parallax Scope", "Vigor", "Aviator", "Shell Compression", "Seeker", "Brutal Tide", "Vitality", "Streamline", "Polar Magazine", "Link Health", "Pack Leader", "Steady Hands", "Soul Survivor", "Rifle Amp", "Finishing Touch", "Thumper", "No Return", "Sniper Scavenger", "Fortitude", "Fracturing Wind", "Vicious Spread", "Lethal Torrent", "Barrel Diffusion", "Steel Charge", "Wildfire", "Morphic Transformer", "Steel Fiber", "Homing Fang", "Maul", "Ironclad Charge", "High Voltage", "Fireball Frenzy", "Energy Siphon", "Targeting Receptor", "Stalk", "Stunning Speed", "Pistol Scavenger", "Magazine Warp", "Charged Shell", "Regen", "Cleanse Corpus", "Hush", "Clashing Forest", "Scattering Inferno", "Enemy Sense", "Speed Trigger", "Crimson Dervish", "Deep Freeze", "Physique", "Maim", "Rifle Aptitude", "Tesla Link", "Pistol Ammo Mutation", "Poisonous Sting", "Dual Rounds", "Ammo Drum", "Burdened Magazine", "Heavy Impact", "Metal Auger", "Master Thief", "Arrow Mutation", "Revenge", "Shell Shock", "Furor", "Whirlwind", "Antitoxin", "Disruptor", "Heavy Caliber", "Piercing Hit", "Thunderbolt", "Razor Shot", "Protect", "Continuity", "Coiling Viper", "Hell's Chamber", "Blade of Truth", "Thief's Wit", "Striker", "Primed Chamber", "Intruder", "Grim Fury", "Energy Channel", "Pool of Life", "Convulsion", "Tainted Clip", "Rapid Resilience", "Pistol Pestilence", "Frail Momentum", "Freeze Force", "Pathogen Rounds", "Focus Energy", "Sudden Impact", "Swirling Tiger", "Corrupt Charge", "Shock Trooper", "Tempered Blade", "Smite Corpus", "Fanged Fusillade", "Hawk Eye", "Concussion Rounds", "Howl", "Link Shields", "Ghost", "Rime Rounds", "Prolonged Paralysis", "Scorch", "Gilded Truth", "Fast Hands", "Deadly Sequence", "Spare Parts", "Vaporize", "Fever Strike", "Sawtooth Clip", "Link Armor", "Bleeding Willow", "Undying Will", "Pointed Wind", "Rifle Scavenger", "Rubedo-Lined Barrel", "Rupture", "Virulent Scourge", "True Steel", "Vital Sense", "Flailing Branch", "Crossing Snakes", "Stretch", "Rejuvenation", "Shredder", "Malicious Raptor", "Hollow Point", "Gleaming Talon", "Sweeping Serration", "Cleaving Whirlwind", "Crowd Dispersion", "Blind Justice", "Efficient Transferral", "Sacrifice", "Extend", "Guardian", "Smoke Shadow", "Blunderbuss", "Fury", "Insulation", "Galvanized Blade", "Bright Purity", "Gnashing Payara", "Tactical Pump", "Quick Thinking", "Flow", "True Punishment", "Savage Silence", "Investigator", "Blazing Steel", "Smite Infested", "Molten Impact", "Glacial Edge", "Expel Grineer", "Critical Deceleration", "Sequence Burn", "Winds of Purity", "Fired Up", "Frigid Blast", "Retribution", "Expel Corpus", "Rending Strike", "Ravage", "Equilibrium", "Entropy Burst", "Fatal Attraction", "Seismic Palm", "Rush", "Pressure Point", "Constitution", "Infected Clip", "Smite Infusion", "Modified Munitions", "Shattering Storm", "Lingering Torment", "Organ Shatter", "Cleanse Infested", "Natural Talent", "Blaze", "Haven", "Flechette", "Provoked", "Voltaic Strike", "Spoiled Strike", "Shimmering Blight", "Loyal Companion", "Justice Blades", "Ammo Stock", "Self Destruct", "Incendiary Coat", "Accelerated Blast", "Split Chamber", "Acrobat", "Decisive Judgement", "Reflection", "Suppress", "Safeguard Switch", "Enhanced Durability", "Buzz Kill", "Enemy Radar", "Heated Charge", "Vacuum", "Hellfire", "Coolant Leak", "Furious Javelin", "Eagle Eye", "Argon Plating", "System Reroute", "Tainted Shell", "North Wind", "Stinging Truth", "Shotgun Scavenger", "Speed Holster", "Killing Blow", "Sure Footed", "Curative Undertow", "Life Strike", "Hornet Strike", "Venomous Clip", "Electrified Barrel", "Stalking Fan", "Iron Phoenix", "Stabilizer", "Quickening", "Sundering Strike", "Gemini Cross", "Stormbringer", "Dig", "Warm Coat", "Tainted Mag", "Terminal Velocity", "Ice Storm", "Toxic Barrage", "Shotgun Ammo Mutation", "Hyperion Thrusters", "Infested Impedance", "Parry", "Sinking Talon", "Burning Wasp", "Crushing Ruin", "Reaping Spiral", "Shotgun Spazz", "Charged Chamber", "Continuous Misery", "Reflex Coil", "Thermite Rounds", "Vaykor Marelok", "Telos Akbolto", "Synoid Gammacor", "Secura Dual Cestra", "Rakta Ballistica", "Sancti Castanas", "Vanguard Rhino Helmet", "Pendragon Excalibur Helmet", "Chlora Saryn Helmet", "Swindle Loki Helmet", "Essence Loki Helmet", "Thrak Rhino Helmet", "Menticide Nyx Helmet", "Aurora Frost Helmet", "Chorus Banshee Helmet", "Squall Frost Helmet", "Locust Ash Helmet", "Avalon Excalibur Helmet", "Flux Nova Helmet", "Aura Trinity Helmet", "Gambit Vauban Helmet", "Storm Volt Helmet", "Esprit Vauban Helmet", "Scorpion Ash Helmet", "Phoenix Ember Helmet", "Reverb Banshee Helmet", "Vespa Nyx Helmet", "Hemlock Saryn Helmet", "Pulse Volt Helmet", "Coil Mag Helmet", "Meridian Trinity Helmet", "Gauss Mag Helmet", "Backdraft Ember Helmet", "Ancient Fusion Core", "Legendary Fusion Core", "Primed Continuity", "Primed Ravage", "Mara Detron", "Primed Flow", "Primed Point Blank", "Primed Fast Hands", "Primed Heavy Trauma", "Primed Heated Charge", "Prisma Gorgon", "Astral Twilight", "Creeping Bullseye", "High Noon", "Wyrm Prime Blueprint", "Wyrm Prime Cerebrum", "Wyrm Prime Carapace", "Wyrm Prime Systems", "Mutalist Alad V Assassinate", "Mutalist Nav Coordinates", "Proof Fragment", "Primed Reach", "Primed Pistol Ammo Mutation", "Prisma Veritux", "Anemic Agility", "Muzzle Flash", "Ice Wave Impedance", "Shield Transference", "Surging Dash", "Resonance", "Seeking Shuriken", "Rift Torrent", "Total Eclipse", "Tidal Impunity", "Fire Fright", "Ballistic Bullseye", "Irradiating Disarm", "Regenerative Molt", "Repelling Bastille", "Despoil", "Mind Freak", "Antimatter Absorb", "Swing Line", "Jet Stream", "Abating Link", "Shocking Speed", "Hallowed Eruption", "Iron Shrapnel", "Arcane Acceleration", "Arcane Agility", "Arcane Avenger", "Arcane Awakening", "Arcane Barrier", "Arcane Eruption", "Arcane Guardian", "Arcane Healing", "Arcane Ice", "Arcane Phantasm", "Arcane Rage", "Arcane Strike", "Arcane Trickery", "Arcane Warmth", "Volt Prime Neuroptics", "Volt Prime Chassis", "Volt Prime Systems", "Volt Prime Blueprint", "Explosive Legerdemain", "Fracturing Crush", "Escape Velocity", "Vampire Leech", "Piercing Caliber", "Tempo Royale", "Capacitance", "Piercing Roar", "Hushed Invisibility", "Pilfering Swarm", "Afterburn", "Eternal War", "Rising Storm", "Chilling Globe", "Firequake", "Odonata Prime Blueprint", "Odonata Prime Harness", "Odonata Prime Wings", "Odonata Prime Systems", "Perpetual Vortex", "Pummel", "Four Riders", "Perpetual Agony", "Primed Pistol Mutation", "Radiant Finish", "Vexing Retaliation", "Crash Course", "Shield Overload", "Shield of Shadows", "Sapping Reach", "Full Contact", "Enduring Strike", "Detect Vulnerability", "Singularity", "Recharge Barrier", "Purging Slash", "Breach Loader", "Lasting Sting", "Bore", "Signal Flare", "Kinetic Collision", "Funnel Clouds", "Primed Slip Magazine", "Shelter", "Auger Strike", "Collision Force", "Lethal Momentum", "Ash Prime Blueprint", "Ash Prime Chassis", "Ash Prime Systems", "Ash Prime Neuroptics", "Carrier Prime Blueprint", "Carrier Prime Cerebrum", "Carrier Prime Carapace", "Carrier Prime Systems", "Vectis Prime Barrel", "Vectis Prime Blueprint", "Vectis Prime Receiver", "Vectis Prime Stock", "Mag", "Primed Pistol Gambit", "Animal Instinct", "Sinister Reach", "Armored Agility", "Seeking Fury", "Prisma Grakata", "Prisma Dual Cleavers", "Arcane Grace", "Arcane Victory", "Arcane Deflection", "Arcane Resistance", "Final Harbinger", "Vermilion Storm", "Mobilize", "Firewalker", "Lightning Dash", "Ice Spring", "Toxic Flight", "Battering Maneuver", "Rending Turn", "Piercing Step", "Patagium", "Seismic Wave", "Adhesive Blast", "Covert Lethality", "Concealed Explosives", "Combustion Beam", "Depleted Reload", "Prisma Skana", "Vaykor Hek", "Telos Boltor", "Synoid Simulor", "Secura Penta", "Rakta Cernos", "Sancti Tigris", "Trinity Prime Blueprint", "Trinity Prime Neuroptics", "Trinity Prime Chassis", "Trinity Prime Systems", "Dual Kamas Prime Blueprint", "Dual Kamas Prime Blade", "Dual Kamas Prime Handle", "Kavasa Prime Collar Blueprint", "Kavasa Prime Collar Buckle", "Kavasa Prime Collar Band", "Gaia's Tragedy", "Atlantis Vulcan", "Arcane Nullifier", "Arcane Pulse", "Prisma Tetra", "Machete Wraith", "Prova Vandal", "Contagion Cloud", "Calculated shot", "Shield Flux", "Arc Coil", "Chaos Sphere", "Hysterical Fixation", "Marathon", "Quick Rest", "Sonic Fracture", "Defiled Reckoning", "Fast Deflection", "Electro Pulse", "Neutralize", "Staggering Shield", "Purifying Flames", "Second Wind", "Retrieve", "Cataclysmic Continuum", "Hallowed Reckoning", "Primed Target Cracker", "Corpus Void Key", "Arcane Fury", "Defiled Snapdragon", "Primed Shotgun Ammo Mutation", "Primed Rifle Ammo Mutation", "Primed Morphic Transformer", "Arcane Aegis", "Arcane Arachne", "Arcane Consequence", "Arcane Energize", "Arcane Momentum", "Arcane Precision", "Arcane Tempo", "Arcane Ultimatum", "Arcane Velocity", "Dera Vandal Blueprint", "Dera Vandal Barrel", "Dera Vandal Receiver", "Dera Vandal Stock", "Karak Wraith Blueprint", "Karak Wraith Barrel", "Karak Wraith Receiver", "Karak Wraith Stock", "Madurai Lens", "Vazarin Lens", "Zenurik Lens", "Naramon Lens", "Unairu Lens", "Agility Drift", "Coaction Drift", "Cunning Drift", "Endurance Drift", "Power Drift", "Speed Drift", "Stealth Drift", "Akbronco Prime Set", "Ankyros Prime Set", "Ash Prime Set", "Bo Prime Set", "Boar Prime Set", "Boltor Prime Set", "Braton Prime Set", "Bronco Prime Set", "Burston Prime Set", "Carrier Prime Set", "Dakra Prime Set", "Dera Vandal Set", "Dual Kamas Prime Set", "Ember Prime Set", "Fang Prime Set", "Frost Prime Set", "Glaive Prime Set", "Hikou Prime Set", "Karak Wraith Set", "Kavasa Prime Collar Set", "Latron Prime Set", "Lex Prime Set", "Loki Prime Set", "Mag Prime Set", "Nova Prime Set", "Nyx Prime Set", "Odonata Prime Set", "Orthos Prime Set", "Paris Prime Set", "Reaper Prime Set", "Rhino Prime Set", "Scindo Prime Set", "Sicarus Prime Set", "Soma Prime Set", "Trinity Prime Set", "Vasto Prime Set", "Vectis Prime Set", "Volt Prime Set", "Wyrm Prime Set", "Madurai Transmute Core", "Naramon Transmute Core", "Vazarin Transmute Core", "Vengeful Revenant", "Nezha Chassis Blueprint", "Nezha Neuroptics Blueprint", "Nezha Systems Blueprint", "Nezha Set", "Adept Surge", "Agile Aim", "Air Recon", "Anticipation", "Apex Predator", "Bounty Hunter", "Broad Eye", "Calculated Spring", "Calculated Victory", "Comet Rounds", "Counterweight", "Crash Shot", "Double-Barrel Drift", "Eject Magazine", "Enguard", "Explosive Demise", "Flak Shot", "Follow Through", "Gun Glide", "Heartseeker", "Impaler Munitions", "Impenetrable Offense", "Lie In Wait", "Lock and Load", "Low Current Leap", "Martial Fury", "Meteor Munitions", "Momentary Pause", "Night Stalker", "Overcharged", "Overcharge Detectors", "Overview", "Prize Kill", "Quick Charge", "Razor Munitions", "Recover", "Recuperate", "Reflex Draw", "Relentless Assault", "Rime Vault", "Ripper Rounds", "Rising Skill", "Searing Leap", "Serrated Edges", "Serrated Rounds", "Sharpened Blade", "Shred Shot", "Snap Shot", "Soft Hands", "Spring-Loaded Broadhead", "Spry Sights", "Stand Ground", "Strafing Slide", "Surplus Diverters", "Sword Alone", "Tactical Reload", "Tear Gas", "Tempered Bound", "Twitch", "Vanquished Prey", "Venomous Rise", "Voltaic Lance", "Adrenaline Boost", "Blind Shot", "Deft Tempo", "Directed Convergence", "Double Tap", "Feathered Arrows", "Final Act", "Final Tap", "Focused Acceleration", "Full Capacity", "Gorgon Frenzy", "Grinloked", "Hastened Steps", "Heavy Warhead", "Heightened Reflexes", "Hydraulic Barrel", "Hydraulic Chamber", "Hydraulic Gauge", "Kill Switch", "Loaded Capacity", "Loose Chamber", "Loose Hatch", "Loose Magazine", "Lucky Shot", "Maximum Capacity", "Measured Burst", "Mortal Conduct", "Plan B", "Secondary Wind", "Soaring Strike", "Sudden Justice", "Tactical Retreat", "Triple Tap", "Vital Systems Bypass", "Armored Evade", "Armored Acrobatics", "Primed Bane of Infested", "Primed Bane of Corpus", "Vulpine Mask", "Primed Bane of Grineer", "Blood Rush", "Body Count", "Weeping Wounds", "Maiming Strike", "Hydraulic Crosshairs", "Argon Scope", "Laser Sight", "Sharpened Bullets", "Bladed Rounds", "Shrapnel Shot", "Pressurized Magazine", "Spring-Loaded Chamber", "Repeater Clip", "Embedded Catalyzer", "Catalyzer Link", "Nano-Applicator", "Narrow Barrel", "Focused Defense", "Guided Ordinance", "Targeting Subsystem", "Strun Wraith Blueprint", "Strun Wraith Barrel", "Strun Wraith Receiver", "Strun Wraith Stock", "Strun Wraith Set", "Ore Gaze", "Tectonic Fracture", "Titanic Rumbler", "Duality", "Calm & Frenzy", "Peaceful Provocation", "Saryn Prime Blueprint", "Saryn Prime Neuroptics", "Saryn Prime Systems", "Saryn Prime Chassis", "Saryn Prime Set", "Nikana Prime Blueprint", "Nikana Prime Blade", "Nikana Prime Hilt", "Nikana Prime Set", "Spira Prime Blueprint", "Spira Prime Blade", "Spira Prime Pouch", "Spira Prime Set", "Shell Rush", "Sheev Blade", "Sheev Blueprint", "Sheev Heatsink", "Sheev Hilt", "Sheev Set", "Mesa's Waltz", "Rumbled", "Push & Pull", "Antimatter Mine", "Prism Guard", "Deceptive Bond", "Discharge Strike", "Ward Recovery", "Power of Three", "Anti-Flak Plating", "Skull Shots (Viper)", "Brain Storm (Grakata)", "Ambush Optics (Rubico)", "Shrapnel Rounds (Marelok)", "Thundermiter (Miter)", "Static Alacrity (Staticor)", "Energy Conversion", "Health Conversion", "War Hilt", "War Blade", "Snipetron Vandal Barrel", "Snipetron Vandal Stock", "Snipetron Vandal Receiver", "Snipetron Vandal Set", "Snipetron Vandal Blueprint", "Quanta Vandal", "Xiphos Fuselage", "Xiphos Engines", "Xiphos Avionics", "Mantis Fuselage", "Mantis Engines", "Mantis Avionics", "Scimitar Fuselage", "Scimitar Engines", "Scimitar Avionics", "Scimitar Set", "Xiphos Set", "Mantis Set", "Sands of Inaros", "Harkonar Scope", "Hunter's Bonesaw", "Acid Shells", "Medi-Ray", "Nightwatch Napalm", "Electromagnetic Shielding", "Rift Strike", "Vulcan Blitz", "Fomorian Accelerant", "Vauban Prime Blueprint", "Vauban Prime Chassis", "Vauban Prime Neuroptics", "Vauban Prime Set", "Fragor Prime Blueprint", "Fragor Prime Handle", "Fragor Prime Head", "Fragor Prime Set", "Akstiletto Prime Blueprint", "Akstiletto Prime Barrel", "Akstiletto Prime Receiver", "Akstiletto Prime Link", "Akstiletto Prime Set", "Vauban Prime Systems", "Imperator Vandal Blueprint", "Imperator Vandal Barrel", "Imperator Vandal Receiver", "Imperator Vandal Set", "Looter", "Air Thrusters", "Fatal Teleport", "Hastened Deflection", "Resonating Quake", "Everlasting Ward", "Phoenix Renewal", "Shattering Impact", "Armored Recovery", "EMP Aura", "Metal Fiber", "Enhanced Vitality", "Calculated Redirection", "Accelerated Deflection", "Primal Rage", "Iron Vault", "Creeping Terrify", "Infiltrate", "Primed Pressure Point", "Silent Battery", "Energy Field", "Cold Snap", "Afterburner", "Zodiac Shred", "Quasar Drill", "Comet Blast", "Nebula Bore", "Meteor Crash", "Kaszas Handle", "Kaszas Blade", "Velocitus Barrel", "Velocitus Receiver", "Velocitus Stock", "Fluctus Barrel", "Fluctus Limbs", "Fluctus Stock", "Dual Decurion Barrel", "Dual Decurion Receiver", "Phaedra Barrel", "Phaedra Receiver", "Phaedra Stock", "Centaur Blade", "Centaur Aegis", "Centaur Handle", "Onorix Handle", "Onorix Blade", "Agkuza Blade", "Agkuza Guard", "Agkuza Handle", "Cyngas Barrel", "Cyngas Receiver", "Cyngas Stock", "Astral Slash", "Lith A1 Intact", "Lith A1 Exceptional", "Lith A1 Flawless", "Lith A1 Radiant", "Lith F1 Intact", "Lith F1 Exceptional", "Lith F1 Flawless", "Lith F1 Radiant", "Lith F2 Intact", "Lith F2 Exceptional", "Lith F2 Flawless", "Lith F2 Radiant", "Lith M1 Intact", "Lith M1 Exceptional", "Lith M1 Flawless", "Lith M1 Radiant", "Lith S1 Intact", "Lith S1 Exceptional", "Lith S1 Flawless", "Lith S1 Radiant", "Lith S2 Intact", "Lith S2 Exceptional", "Lith S2 Flawless", "Lith S2 Radiant", "Lith V1 Intact", "Lith V1 Exceptional", "Lith V1 Flawless", "Lith V1 Radiant", "Meso B1 Intact", "Meso B1 Exceptional", "Meso B1 Flawless", "Meso B1 Radiant", "Meso C1 Intact", "Meso C1 Exceptional", "Meso C1 Flawless", "Meso C1 Radiant", "Meso D1 Intact", "Meso D1 Exceptional", "Meso D1 Flawless", "Meso D1 Radiant", "Meso N1 Intact", "Meso N1 Exceptional", "Meso N1 Flawless", "Meso N1 Radiant", "Meso N2 Intact", "Meso N2 Exceptional", "Meso N2 Flawless", "Meso N2 Radiant", "Meso V1 Intact", "Meso V1 Exceptional", "Meso V1 Flawless", "Meso V1 Radiant", "Meso V2 Intact", "Meso V2 Exceptional", "Meso V2 Flawless", "Meso V2 Radiant", "Neo D1 Intact", "Neo D1 Exceptional", "Neo D1 Flawless", "Neo D1 Radiant", "Neo N1 Intact", "Neo N1 Exceptional", "Neo N1 Flawless", "Neo N1 Radiant", "Neo N2 Intact", "Neo N2 Exceptional", "Neo N2 Flawless", "Neo N2 Radiant", "Neo S1 Intact", "Neo S1 Exceptional", "Neo S1 Flawless", "Neo S1 Radiant", "Neo S2 Intact", "Neo S2 Exceptional", "Neo S2 Flawless", "Neo S2 Radiant", "Neo V1 Intact", "Neo V1 Exceptional", "Neo V1 Flawless", "Neo V1 Radiant", "Axi A1 Intact", "Axi A1 Exceptional", "Axi A1 Flawless", "Axi A1 Radiant", "Axi K1 Intact", "Axi K1 Exceptional", "Axi K1 Flawless", "Axi K1 Radiant", "Axi N1 Intact", "Axi N1 Exceptional", "Axi N1 Flawless", "Axi N1 Radiant", "Axi N2 Intact", "Axi N2 Exceptional", "Axi N2 Flawless", "Axi N2 Radiant", "Axi S1 Intact", "Axi S1 Exceptional", "Axi S1 Flawless", "Axi S1 Radiant", "Axi V1 Intact", "Axi V1 Exceptional", "Axi V1 Flawless", "Axi V1 Radiant", "Axi V2 Intact", "Axi V2 Exceptional", "Axi V2 Flawless", "Axi V2 Radiant", "Neo S3 Intact", "Neo S3 Exceptional", "Neo S3 Flawless", "Neo S3 Radiant", "Charm", "Mischief", "Cat's Eye", "Reflect", "Corvas Barrel", "Corvas Receiver", "Corvas Stock", "Rathbone Handle", "Rathbone Head", "Latron Wraith Barrel", "Latron Wraith Blueprint", "Latron Wraith Receiver", "Latron Wraith Stock", "Latron Wraith Set", "Territorial Aggression", "Swipe", "Pounce", "Sharpened Claws", "Sense Danger", "Bullet Dance", "Wraith Twin Vipers Blueprint", "Wraith Twin Vipers Barrels", "Wraith Twin Vipers Link", "Wraith Twin Vipers Receivers", "Wraith Twin Vipers Set", "Nekros Prime Set", "Nekros Prime Chassis", "Nekros Prime Neuroptics", "Nekros Prime Systems", "Tigris Prime Set", "Tigris Prime Stock", "Tigris Prime Barrel", "Tigris Prime Receiver", "Tigris Prime Blueprint", "Galatine Prime Set", "Galatine Prime Handle", "Galatine Prime Blade", "Galatine Prime Blueprint", "Nekros Prime Blueprint", "Pistol Amp", "Growing Power", "Shotgun Amp", "Empowered Blades", "Stand United", "Brief Respite", "Assimilate", "Safeguard", "Path of Statues", "Spinning Needle", "Axi G1 Intact", "Axi G1 Exceptional", "Axi G1 Flawless", "Axi G1 Radiant", "Hysterical Assault", "Elemental Sandstorm", "Flash Accelerant", "Vaykor Sydon", "Telos Boltace", "Synoid Heliocor", "Secura Lecta", "Rakta Dark Dagger", "Sancti Magistar", "Amesha Systems", "Amesha Wings", "Amesha Harness", "Amesha Set", "Elytron Systems", "Elytron Wings", "Elytron Harness", "Elytron Set", "Itzal Systems", "Itzal Wings", "Itzal Harness", "Itzal Set", "Neo N3 Intact", "Neo N3 Exceptional", "Neo N3 Flawless", "Neo N3 Radiant", "Axi T1 Intact", "Axi T1 Exceptional", "Axi T1 Flawless", "Axi T1 Radiant", "Axi N3 Intact", "Axi N3 Exceptional", "Axi N3 Flawless", "Axi N3 Radiant", "Cyan Ayatan Star", "Amber Ayatan Star", "Ayr Ayatan Sculpture", "Orta Ayatan Sculpture", "Piv Ayatan Sculpture", "Sah Ayatan Sculpture", "Vaya Ayatan Sculpture", "Steel Meridian Augment Mod", "Cephalon Suda Augment Mod", "The Perrin Sequence Augment Mod", "Red Veil Augment Mod", "New Loka Augment Mod", "Arbiters of Hexis Augment Mod", "Shadow Harvest", "Cunning Aspect", "Argent Scourge", "Rending Wind", "Noble Cadence", "Thermagnetic Shells", "Kinetic Ricochet", "Medi-Pet Kit", "Shield Charger", "Static Discharge", "Pain Threshold", "Streamlined Form", "Drifting Contact", "Chilling Reload", "Primed Cryo Rounds", "Neo V2 Intact", "Neo V2 Radiant", "Neo V2 Exceptional", "Neo V2 Flawless", "Neo V3 Intact", "Neo V3 Radiant", "Neo V3 Exceptional", "Neo V3 Flawless", "Valkyr Prime Blueprint", "Valkyr Prime Neuroptics", "Valkyr Prime Chassis", "Valkyr Prime Systems", "Valkyr Prime Set", "Venka Prime Blueprint", "Venka Prime Gauntlet", "Venka Prime Blades", "Venka Prime Set", "Cernos Prime Blueprint", "Cernos Prime Lower Limb", "Cernos Prime Upper Limb", "Cernos Prime Grip", "Cernos Prime String", "Cernos Prime Set", "Axi V5 Intact", "Axi V5 Exceptional", "Axi V5 Flawless", "Axi V5 Radiant", "Neo V4 Intact", "Neo V4 Exceptional", "Neo V4 Flawless", "Neo V4 Radiant", "Neo N4 Intact", "Neo N4 Exceptional", "Neo N4 Flawless", "Neo N4 Radiant", "Axi C1 Intact", "Axi C1 Exceptional", "Axi C1 Flawless", "Axi C1 Radiant", "Meso C2 Intact", "Meso C2 Exceptional", "Meso C2 Flawless", "Meso C2 Radiant", "Neo A1 Intact", "Neo A1 Exceptional", "Neo A1 Flawless", "Neo A1 Radiant", "Axi V4 Intact", "Axi V4 Exceptional", "Axi V4 Flawless", "Axi V4 Radiant", "Meso V3 Intact", "Meso V3 Exceptional", "Meso V3 Flawless", "Meso V3 Radiant", "Meso S3 Intact", "Meso S3 Exceptional", "Meso S3 Flawless", "Meso S3 Radiant", "Emergent Aftermath", "Rifle Riven Mod (Veiled)", "Icy Avalanche", "Corroding Barrage", "Reinforcing Stomp", "Savior Decoy", "Condition Overload", "Dispatch Overdrive", "Enduring Affliction", "Guardian Derision", "Healing Return", "Relentless Combination", "Lith G1 Intact", "Lith G1 Exceptional", "Lith G! Flawless", "Lith G1 Radiant", "Meso F2 Intact", "Meso F2 Exceptional", "Meso F2 Flawless", "Meso F2 Radiant", "Neo S5 Intact", "Neo S5 Exceptional", "Neo S5 Flawless", "Neo S5 Radiant", "Axi E1 Intact", "Axi E1 Exceptional", "Axi E1 Flawless", "Axi E1 Radiant", "Draining Gloom", "Precision Munition", "Flux Overdrive", "Tether Grenades", "Shotgun Riven Mod (Veiled)", "Pistol Riven Mod (Veiled)", "Primed Regen", "Sovereign Outcast", "Astral Autopsy", "Anasa Ayatan Scultpture", "Aklex Prime Blueprint", "Aklex Prime Link", "Aklex Prime Set", "Axi A2 Intact", "Axi A2 Exceptional", "Axi A2 Flawless", "Axi A2 Radiant", "Banshee Prime Blueprint", "Banshee Prime Neuroptics", "Banshee Prime Chassis", "Banshee Prime Systems", "Banshee Prime Set", "Euphona Prime Barrel", "Euphona Prime Receiver", "Euphona Prime Blueprint", "Euphona Prime Set", "Helios Prime Set", "Helios Prime Cerebrum", "Helios Prime Carapace", "Helios Prime Systems", "Helios Prime Blueprint", "Valana Ayatan Sculpture", "Vulkar Wraith", "Axi B1 Intact", "Axi B1 Exceptional", "Axi B1 Flawless", "Axi B1 Radiant", "Neo B1 Intact", "Neo B1 Exceptional", "Neo B1 Flawless", "Neo B1 Radiant", "Meso S4 Intact", "Meso S4 Exceptional", "Meso S4 Flawless", "Meso S4 Radiant", "Neo T1 Intact", "Neo T1 Exceptional", "Neo T1 Flawless", "Neo T1 Radiant", "Axi H1 Intact", "Axi H1 Exceptional", "Axi H1 Flawless", "Axi H1 Radiant", "Lith N2 Intact", "Lith N2 Exceptional", "Lith N2 Flawless", "Lith N2 Radiant", "Neo N5 Intact", "Neo N5 Exceptional", "Neo N5 Flawless", "Neo N5 Radiant", "Lith V3 Intact", "Lith V3 Exceptional", "Lith V3 Flawless", "Lith V3 Radiant", "Meso N3 Intact", "Meso N3 Exceptional", "Meso N3 Flawless", "Meso N3 Radiant", "Axi E2 Intact", "Axi E2 Exceptional", "Axi E2 Flawless", "Axi E2 Radiant", "Meso F1 Intact", "Meso F1 Exceptional", "Meso F1 Flawless", "Meso F1 Radiant", "Proboscis", "Trample", "Lith K1 Intact", "Lith K1 Exceptional", "Lith K1 Flawless", "Lith K1 Radiant", "Amaryn's Retreat Scene", "Arbiter's Tribunal Scene", "Color Key", "Cressa's Garrison Scene", "Ergo's Boardroom Scene", "Lunaro Arena Scene", "Suda's Datascape Scene", "Teshin's Refuge Scene", "Veil's Binding Scene", "Pyroclastic Flow", "Negation Swarm", "Beguiling Lantern", "Piercing Navigator", "Orvius Blueprint", "Orvius Blade", "Orvius Disc", "Ignis Wraith Blueprint", "Prisma Obex", "Disarming Purity", "Neutralizing Justice", "Voltage Sequence", "Stockpiled Blight", "Entropy Detonation", "Avenging Truth", "Fulmination", "Gorgon Wraith Set", "Gorgon Wraith Blueprint", "Gorgon Wraith Barrel", "Gorgon Wraith Receiver", "Gorgon Wraith Stock", "Meso V4 Relic", "Cyclone Kraken", "Oberon Prime Blueprint", "Oberon Prime Neuroptics", "Oberon Prime Chassis", "Oberon Prime Systems", "Oberon Prime Set", "Sybaris Prime Blueprint", "Sybaris Prime Stock", "Sybaris Prime Receiver", "Sybaris Prime Barrel", "Sybaris Prime Set", "Silva & Aegis Prime Blueprint", "Silva & Aegis Prime Guard", "Silva & Aegis Prime Hilt", "Silva & Aegis Prime Blade", "Silva & Aegis Prime Set", "Axi H2 Intact", "Axi H2 Exceptional", "Axi H2 Flawless", "Axi H2 Radiant", "Axi O1 Intact", "Axi O1 Exceptional", "Axi O1 Flawless", "Axi O1 Radiant", "Axi B2 Intact", "Axi B2 Exceptional", "Axi B2 Flawless", "Axi B2 Radiant", "Axi C2 Intact", "Axi C2 Exceptional", "Axi C2 Flawless", "Axi C2 Radiant", "Meso N4 Intact", "Meso N4 Exceptional", "Meso N4 Flawless", "Meso N4 Radiant", "Meso O1 Intact", "Meso O1 Exceptional", "Meso O1 Flawless", "Meso O1 Radiant", "Lith N3 Intact", "Lith N3 Exceptional", "Lith N3 Flawless", "Lith N3 Radiant", "Meso S5 Intact", "Meso S5 Exceptional", "Meso S5 Flawless", "Meso S5 Radiant", "Neo N6 Intact", "Neo N6 Exceptional", "Neo N6 Flawless", "Neo N6 Radiant", "Neo V5 Intact", "Neo V5 Exceptional", "Neo V5 Flawless", "Neo V5 Radiant", "Neo S6 Intact", "Neo S6 Exceptional", "Neo S6 Flawless", "Neo S6 Radiant", "Meso V5 Intact", "Meso V5 Exceptional", "Meso V5 Flawless", "Meso V5 Radiant", "Magnetized Discharge", "Chromatic Blade", "Guided Effigy", "Transistor Shield" ];