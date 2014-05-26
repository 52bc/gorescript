GS.Weapons = {
	pistol: {
		powerLevel: 2,
		ammo: 0,
		infiniteAmmo: true,
		cooldown: 400,
		hitscan: false,
	},
	double_shotgun: {
		powerLevel: 3,
		ammo: 0,
		ammoMax: 50,
		ammoClip: 8,
		bulletsPerShot: 2,
		cooldown: 1000,
		hitscan: true,
		spread: {
			shots: 8,
			angleOffset: 6,
		},
		damage: 10,
		impactParticleColor: new THREE.Color().setRGB(1, 1, 1).getHex(),
		impactParticleCount: 1,
	},
	hyper_blaster: {
		powerLevel: 4,
		ammo: 0,
		ammoMax: 200,
		ammoClip: 20,
		bulletsPerShot: 1,
		cooldown: 80,
		hitscan: false,
	},
};