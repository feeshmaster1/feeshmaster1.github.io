elements.pure_Heat = {
    color: "#ff5f5f",
    tool: function(pixel) {
        pixel.temp += 9837429837948374983247937439284739247392879898732497943298;
		pixelTempCheck(pixel)
    },
    category: "tools",
};
elements.pure_cold = {
    color: "#4747ff",
    tool: function(pixel) {
        pixel.temp -= 983742983794837498324793743928473924739287989873249794329898985;
		pixelTempCheck(pixel)
    },
    category: "tools",
};

elements.super_wall = {
		color: "#828282", 
		behavior: behaviors.WALL,
		tempHigh: 18446744073709551615184467440737095516151844674407370955161518446744073709551615,
		category: "solids",
		state: "solid",
		density: 12023,
		conduct: 0,
		hardness: 18446744073709551615184467440737095516151844674407370955161518446744073709551615,
	}
