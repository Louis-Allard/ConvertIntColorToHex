   ConvertIntColorToHex(number) {
        //converts to a integer
        let intnumber = number - 0;
        // isolate the colors - really not necessary
        let red, green, blue;
        // needed since toString does not zero fill on left
        let template = "#000000";
        // in the MS Windows world RGB colors
        // are 0xBBGGRR because of the way Intel chips store bytes
        red = (intnumber&0x0000ff) << 16;
        green = intnumber&0x00ff00;
        blue = (intnumber&0xff0000) >>> 16;
        // mask out each color and reverse the order
        intnumber = red|green|blue;
        // toString converts a number to a hexstring
        let HTMLcolor = intnumber.toString(16);
        //template adds # for standard HTML #RRGGBB
        HTMLcolor = template.substring(0,7 - HTMLcolor.length) + HTMLcolor;
        console.log( HTMLcolor);
    }
