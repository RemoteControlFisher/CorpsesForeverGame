var levelTwo = {
      music: "./sound/BMG/World of Horror Soundtrack Mansion Combat.mp3",
      walls: [
            { startX: -3, startY: 0, lengthX: 13, lengthY: 1, type: "thinPlatform" },
            { startX: -4, startY: -2, lengthX: 15, lengthY: 1, type: "floor" },
            //    { startX: -4, startY: -2, lengthX: 1, lengthY: 1, type: "tright" },

            { startX: -6, startY: 1, lengthX: 1, lengthY: 5, type: "wleft" },
            { startX: 11, startY: -2, lengthX: 1, lengthY: 9, type: "wright" },
            { startX: -6, startY: 6, lengthX: 18, lengthY: 1, type: "floor" },
            //{ startX: -7, startY: 0, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: -7, startY: 0, lengthX: 4, lengthY: 1, type: "floor" },
            //{ startX: -4, startY: 0, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 10, startY: 0, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 10, startY: -1, lengthX: 1, lengthY: 1, type: "wleft" },
            { startX: 12, startY: -3, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 11, startY: -3, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 12, startY: -12, lengthX: 1, lengthY: 9, type: "wright" },
            { startX: 12, startY: -12, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 13, startY: -12, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: -6, startY: 6, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 11, startY: 6, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 13, startY: -9, lengthX: 32, lengthY: 1, type: "floor" },

            { startX: -7, startY: -15, lengthX: 1, lengthY: 15, type: "wleft" },

            //{ startX: -7, startY: -16, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: -7, startY: -16, lengthX: 22, lengthY: 1, type: "floor" },

            { startX: 13, startY: -17, lengthX: 26, lengthY: 1, type: "floor" },
            //{ startX: 13, startY: -17, lengthX: 1, lengthY: 1, type: "tright" },
            //{ startX: 14, startY: -16, lengthX: 1, lengthY: 1, type: "tleft" },


            { startX: 0, startY: -14, lengthX: 5, lengthY: 1, type: "floor" },
            //{ startX: 0, startY: -14, lengthX: 1, lengthY: 1, type: "tright" },
            //{ startX: 4, startY: -14, lengthX: 1, lengthY: 1, type: "tleft" },
             
            //Spike pit
            { startX: 38, startY: -29, lengthX: 7, lengthY: 1, type: "floor" },    // x: 191, y: 20  difference x = 153 y: -48
            { startX: 44, startY: -30, lengthX: 1, lengthY: 1, type: "tleft" },
            //{ startX: 38, startY: -29, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 38, startY: -28, lengthX: 1, lengthY: 11, type: "wright" },
            { startX: 44, startY: -34, lengthX: 1, lengthY: 4, type: "wright" },
            { startX: 44, startY: -34, lengthX: 17, lengthY: 1, type: "floor" },
            { startX: 60, startY: -38, lengthX: 1, lengthY: 4, type: "wright" },
            { startX: 60, startY: -39, lengthX: 19, lengthY: 1, type: "floor" },
            { startX: 78, startY: -38, lengthX: 1, lengthY: 4, type: "wleft" },
            { startX: 78, startY: -34, lengthX: 12, lengthY: 1, type: "floor" },
            { startX: 83, startY: -33, lengthX: 9, lengthY: 1, type: "floor" },
            { startX: 85, startY: -32, lengthX: 8, lengthY: 1, type: "floor" },
            { startX: 87, startY: -31, lengthX: 7, lengthY: 1, type: "floor" },
            { startX: 39, startY: -23, lengthX: 1, lengthY: 1, type: "tleft" },

            //KIETS LEVEL SEGMENT: Place later in the level.
            // bottom platform
            { startX: 93, startY: -39, lengthX: 51, lengthY: 1, type: "floor" }, // x: 34 y: 19 difference: x:55 y: -58 
            //2nd platform
            { startX: 100, startY: -31, lengthX: 5, lengthY: 1, type: "floor" },
            //3nd platforms
            { startX: 110, startY: -28, lengthX: 5, lengthY: 1, type: "floor" },
            //4nd platform
            { startX: 120, startY: -25, lengthX: 5, lengthY: 1, type: "floor" },
            //wall platforms
            { startX: 93, startY: -38, lengthX: 1, lengthY: 7, type: "wright" },
            //end #1 platform
            { startX: 134, startY: -23, lengthX: 4, lengthY: 1, type: "floor" },
            //end #2 platform
            { startX: 139, startY: -19, lengthX: 5, lengthY: 1, type: "floor" },
            //#2 bottom platform
            //{ startX: 136, startY: -43, lengthX: 17, lengthY: 1, type: "floor" },
            //wall platform
            { startX: 143, startY: -38, lengthX: 1, lengthY: 19, type: "wleft" },
             // helper platform
             { startX: 94, startY: -36, lengthX: 1, lengthY: 1, type: "floor" },
            // helper platform
            { startX: 95, startY: -36, lengthX: 1, lengthY: 1, type: "tleft" },
            //slide platform
            //{ startX: 136, startY: -39, lengthX: 10, lengthY: 1, type: "floor" },
            { startX: 143, startY: -18, lengthX: 1, lengthY: 10, type: "wright" },


            //Hall of spikes.
            { startX: 88, startY: -15, lengthX: 49, lengthY: 1, type: "floor" },
            { startX: 107, startY: -12, lengthX: 27, lengthY: 1, type: "floor" },
            //{ startX: 106, startY: -11, lengthX: 2, lengthY: 1, type: "floor" },

            { startX: 133, startY: -8, lengthX: 11, lengthY: 1, type: "floor" },

            { startX: 133, startY: -11, lengthX: 1, lengthY: 3, type: "wleft" },
            { startX: 88, startY: -14, lengthX: 1, lengthY: 19, type: "wleft" },
            { startX: 106, startY: -10, lengthX: 1, lengthY: 21, type: "wright" },

            //The "Tower"
            { startX: 89, startY: -11, lengthX: 11, lengthY: 1, type: "p" },
            { startX: 100, startY: -11, lengthX: 9, lengthY: 1, type: "f" },

            { startX: 95, startY: -8, lengthX: 11, lengthY: 1, type: "p" },
            { startX: 89, startY: -8, lengthX: 9, lengthY: 1, type: "f" },

            { startX: 89, startY: -5, lengthX: 11, lengthY: 1, type: "p" },
            { startX: 100, startY: -5, lengthX: 6, lengthY: 1, type: "f" },

            { startX: 89, startY: -2, lengthX: 11, lengthY: 1, type: "f" },
            { startX: 100, startY: -2, lengthX: 6, lengthY: 1, type: "p" },

            { startX: 89, startY: 1, lengthX: 11, lengthY: 1, type: "p" },
            { startX: 100, startY: 1, lengthX: 6, lengthY: 1, type: "f" },

            { startX: 79, startY: 5, lengthX: 21, lengthY: 1, type: "f" },
            { startX: 60, startY: 11, lengthX: 47, lengthY: 1, type: "f" },   //top floor
            { startX: 79, startY: -5, lengthX: 1, lengthY: 10, type: "wl" },
            { startX: 44, startY: -5, lengthX: 35, lengthY: 1, type: "f" },
            { startX: 44, startY: -8, lengthX: 1, lengthY: 3, type: "wl" },

            { startX: 38, startY: 5, lengthX: 9, lengthY: 1, type: "f" },
            { startX: 38, startY: -4, lengthX: 1, lengthY: 9, type: "wl" },
            { startX: 31, startY: -5, lengthX: 8, lengthY: 1, type: "f" },
            { startX: 31, startY: -4, lengthX: 1, lengthY: 9, type: "wr" },
            { startX: 20, startY: 5, lengthX: 12, lengthY: 1, type: "f" },
            { startX: 20, startY: -4, lengthX: 1, lengthY: 9, type: "wl" },
            { startX: 21, startY: 2, lengthX: 5, lengthY: 1, type: "p" },
            { startX: 16, startY: -5, lengthX: 5, lengthY: 1, type: "f" },


            { startX: 13, startY: -5, lengthX: 3, lengthY: 1, type: "p" },
            //            { x: 12, y: 1, nLevel: "end" },
            { startX: 12, startY: 0, lengthX: 3, lengthY: 1, type: "f" },
            { startX: 15, startY: 0, lengthX: 5, lengthY: 1, type: "p" },
            { startX: 19, startY: 4, lengthX: 1, lengthY: 3, type: "wr" },
            { startX: 12, startY: 4, lengthX: 1, lengthY: 3, type: "wl" },
            { startX: 12, startY: 7, lengthX: 2, lengthY: 1, type: "f" },
            { startX: 18, startY: 7, lengthX: 2, lengthY: 1, type: "f" },
            { startX: 18, startY: 8, lengthX: 1, lengthY: 3, type: "wr" },
            { startX: 13, startY: 8, lengthX: 1, lengthY: 3, type: "wl" },
            { startX: 13, startY: 11, lengthX: 6, lengthY: 1, type: "f" },
            { startX: 12, startY: 3, lengthX: 8, lengthY: 1, type: "p" },
            { startX: 13, startY: 5, lengthX: 6, lengthY: 1, type: "p" },
            { startX: 14, startY: 7, lengthX: 4, lengthY: 1, type: "p" },
            { startX: 14, startY: 9, lengthX: 4, lengthY: 1, type: "p" },

            //            { x: 90, y: -26},

            { startX: 89, startY: -25, lengthX: 3, lengthY: 1, type: "f" },


            // Celest inspired
            { startX: 74, startY: 4, lengthX: 1, lengthY: 7, type: "wr" },   //wall #1
            { startX: 70, startY: -4, lengthX: 1, lengthY: 11, type: "wr" }, //wall #2
            { startX: 67, startY: 7, lengthX: 4, lengthY: 1, type: "f" },    //platform #1
            { startX: 65, startY: 3, lengthX: 1, lengthY: 8, type: "wr" },    //platform #3
            { startX: 64, startY: 2.5, lengthX: 1, lengthY: 1, type: "wl" },    //Secret WALLJUMP sauce.
            { startX: 64, startY: 3, lengthX: 2, lengthY: 1, type: "f" },    //platform #2
            { startX: 61, startY: -4, lengthX: 1, lengthY: 11, type: "wr" }, //wall #3
            { startX: 60, startY: 7, lengthX: 3, lengthY: 1, type: "f" }, //platform #4
            
            { startX: 39, startY: -5, lengthX: 5, lengthY: 1, type: "p" },

            //Authoritarian Rat platform 
            //(the solution is very simple, and you can time it by sticking to a wall & just wall slide)

            //side wall block 1
            //{ startX: 140, startY: -15, lengthX: 1, lengthY: 21, type: "wright" },
            //side wall block 2
            //{ startX: 150, startY: -18, lengthX: 1, lengthY: 24, type: "wleft" },
            //1st platform
            //{ startX: 141, startY: -15, lengthX: 9, lengthY: 1, type: "thinPlatform" },
            //2nd platform
            //{ startX: 141, startY: -12, lengthX: 9, lengthY: 1, type: "thinPlatform" },
            //3rd platform
            //{ startX: 141, startY: -9, lengthX: 9, lengthY: 1, type: "thinPlatform" },
            //4th platform
            //{ startX: 141, startY: -6, lengthX: 9, lengthY: 1, type: "thinPlatform" },
            //5th platform
            //{ startX: 141, startY: -3, lengthX: 9, lengthY: 1, type: "thinPlatform" },
            //6th platform
            //{ startX: 141, startY: 0, lengthX: 9, lengthY: 1, type: "thinPlatform" },
            //7th platform
            //{ startX: 141, startY: 3, lengthX: 9, lengthY: 1, type: "thinPlatform" },
            //bounce platform
            //{ startX: 141, startY: 3, lengthX: 9, lengthY: 1, type: "thinPlatform" },
            //freedom platform
            //{ startX: 141, startY: 6, lengthX: 9, lengthY: 1, type: "thinPlatform" },

            //next level? 

            //platform right
            //{ startX: 130, startY: 6, lengthX: 11, lengthY: 1, type: "floor" },
            //platform left
            //{ startX: 150, startY: 6, lengthX: 10, lengthY: 1, type: "floor" },

      ],
      doors:[
            { x: 18, y: -7, key: 1 },
            { x: 18, y: -6, key: 1 },
            { x: 18, y: -8, key: 1 }
      ],
      buttons: [{ x: 22, y: 2.56, key: 1 }],
      boxes: [
            { x: 3, y: -13 },
            { x: 41, y: -25 },



      ],
      hoppers: [
            { x: 3, y: -11 },
            { x: 46, y: -2},
            { x: 49, y: -2},
            { x: 41, y: -2},
            //{ x: 63,y: -35}   //dies?
      ],
      chompers: [
           // { startX: 96, startY: -3, lengthX: 6, lengthY: 1, type: "p" },

           { x: 96, y: -4},
           { x: 96, y: -1, facing: "r"}
      ],
      lurkers: [
            //{ x: 93, y: -32},
            { x: 115, y: -32 },
            { x: 110, y: -32 },
            { x: 120, y: -32 },
            //{ x: 45, y: -2},
           // { x: 41, y: -2},
      ],
      spikes:[
            { x: 15, y: -16, length: 18},
            { x: 108, y: -14, length: 16},
            { x: 47.5, y: -33, length: 13},
            { x: 61, y: -38, length: 15.1},
            { x: 79, y: -33, length: 2.1},
            { x: 71, y: -4, length: 7.1},
            { x: 62, y: -4, length: 7.1},

      ],
      traps: [
            
            //{ x: 15, y: -16 },
            //{ x: 16, y: -16 },
            //{ x: 17, y: -16 },
            //{ x: 18, y: -16 },
            //{ x: 19, y: -16 },
            //{ x: 20, y: -16 },
            //{ x: 21, y: -16 },
            //{ x: 22, y: -16 },
            //{ x: 23, y: -16 },
            //{ x: 24, y: -16 },
            //{ x: 25, y: -16 },
            //{ x: 26, y: -16 },
            //{ x: 27, y: -16 },
            ///{ x: 28, y: -16 },
            //{ x: 29, y: -16 },
            //{ x: 30, y: -16 },
            //{ x: 31, y: -16 },
            //{ x: 32, y: -16 },
            //{ x: 33, y: -16 },
            //{ x: 34, y: -16 },
            //{ x: 35, y: -16 },
            //{ x: 36, y: -16 },
            //{ x: 37, y: -16 },
            
            //HALL OF SPIKES SPIKES
            //{ x: 108, y: -14 },
            //{ x: 109, y: -14 },
            //{ x: 110, y: -14 },
            //{ x: 111, y: -14 },
            //{ x: 112, y: -14 },
            //{ x: 113, y: -14 },
            //{ x: 114, y: -14 },
            //{ x: 115, y: -14 },
            //{ x: 116, y: -14 },
            //{ x: 117, y: -14 },
            //{ x: 118, y: -14 },
            //{ x: 119, y: -14 },
            //{ x: 120, y: -14 },
            //{ x: 121, y: -14 },
            //{ x: 122, y: -14 },
            //{ x: 123, y: -14 },



            //spike for spike pit
            //{x: 48, y: -33, type: "spike"},
            //{x: 49, y: -33, type: "spike"},
            //{x: 50, y: -33, type: "spike"},
            //{x: 51, y: -33, type: "spike"},
            //{x: 52, y: -33, type: "spike"},
            //{x: 53, y: -33, type: "spike"},
            //{x: 54, y: -33, type: "spike"},
            //{x: 55, y: -33, type: "spike"},
            //{x: 56, y: -33, type: "spike"},
            //{x: 57, y: -33, type: "spike"},
            //{x: 58, y: -33, type: "spike"},
            //{x: 59, y: -33, type: "spike"},
            //{x: 59.6, y: -33, type: "spike"},
            
            // {x: 61, y: -38, type: "spike"},
            // {x: 62, y: -38, type: "spike"},
            // {x: 63, y: -38, type: "spike"},
            // {x: 64, y: -38, type: "spike"},
            // {x: 65, y: -38, type: "spike"},
            // {x: 66, y: -38, type: "spike"},
            // {x: 67, y: -38, type: "spike"},
            // {x: 68, y: -38, type: "spike"},
            // {x: 69, y: -38, type: "spike"},
            // {x: 70, y: -38, type: "spike"},
            // {x: 71, y: -38, type: "spike"},
            // {x: 72, y: -38, type: "spike"},
            // {x: 73, y: -38, type: "spike"},
            // {x: 74, y: -38, type: "spike"},
            // {x: 75, y: -38, type: "spike"},
            // {x: 76, y: -38, type: "spike"},
            // {x: 76.6, y: -38, type: "spike"},

            //{x: 231, y: 17, type: "spike"},
            //{x: 79, y: -33, type: "spike"},
            //{x: 80, y: -33, type: "spike"},
            //{x: 81, y: -33, type: "spike"},
            //{x: 81.6, y: -33, type: "spike"},

            //Celeste spike
            //{x: 71, y: -4, type: "spike"},
            //{x: 72, y: -4, type: "spike"},
            //{x: 73, y: -4, type: "spike"},
            //{x: 74, y: -4, type: "spike"},
            //{x: 75, y: -4, type: "spike"},
            //{x: 76, y: -4, type: "spike"},
            //{x: 77, y: -4, type: "spike"},
            //{x: 78, y: -4, type: "spike"},

            //{x: 69, y: -4, type: "spike"},
            //{x: 68, y: -4, type: "spike"},
            //{x: 67, y: -4, type: "spike"},
            //{x: 66, y: -4, type: "spike"},
            //{x: 65, y: -4, type: "spike"},
            //{x: 64, y: -4, type: "spike"},
            //{x: 63, y: -4, type: "spike"},
            //{x: 62, y: -4, type: "spike"},

            
            //keiso saw
            //{ x: 97, y: -31, type: "saw" }, 
            { x: 107,y: -29,type: "saw"}, 
            {x: 117,y: -26,type: "lsaw"}, 
            //{ x: 131,y: -24,type: "saw"}, 
            {x: 128, y: -24, type: "lsaw"},

            {x: 104,y: -9,type: "lsaw"}, 
            {x: 29,y: -4,type: "lsaw"}, 
            {x: 21,y: -2,type: "saw"}, 
            {x: 29,y: 0,type: "lsaw"}, 


            //{x: 91,y: 26,type: "saw"}, 
            //{x: 85,y: 27,type: "saw" }, 
            //{x: 88,y: 27,type: "saw"}, 
            //{x: 76,y: 27,type: "saw" }, 
            //{x: 60,y: 27,type: "saw"}, 
            //{x: 71,y: 27,type: "saw"}, 
            //{x: 44,y: 27,type: "saw"}, 
            //{x: 53,y: 27,type: "saw"}, 
            
      ],
      spawns: [
            { x: 0, y: 5 },
            { x: 13, y:-13},
            { x: 39, y: -24},
            { x: 89.6, y: -26},
            { x: 105.5, y: -12},
            //            { startX: 79, startY: 10, lengthX: 28, lengthY: 1, type: "f" },

            { x: 82, y:10},
            { x:60 , y: 10}

      ],
      backs: [
            { startX: -6, startY: -16, lengthX: 150, lengthY: 28, type: "darkBwall" },
            { startX: 38, startY: -40, lengthX: 106, lengthY: 24, type: "darkBwall" },
      ],
      corpses: [
            { x: 76, y: -33, type: "lurker", facing: "l" },
            { x: 136, y: -21, type: "lurker", facing: "l" },
            { x: 94, y: -35, type: "lurker", facing: "l" },
            //{ x: 148, y: -18, type: "lurker", facing: "l" },
            //{ x: 144, y: -18, type: "hopper", facing: "l" },
            { x: 141, y: -18, type: "lurker", facing: "l" },
            {x: 71, y: -2, type: "hopper", facing: "l" },
            { x: 65, y: 0, type: "hopper", facing: "l" },
            //{ x: 118, y: -37 },
            { x: 41, y: -20 },
            { x: 41, y: -25, type: "chomper" },
            { x: 41, y: -4 },

      ],
      dtexts: [
            { x: -4, y: 7, toWrite: 'You can fall through platforms by crouching.', animated: true, delay: 1 },
            { x: -4.5, y: 6.4, toWrite: 'Holding shift prevents you from falling through.', animated: true, delay: 1.5 },
            { x: 120, y: -14, toWrite: 'You remember that spikes only kill you when you land on them.', animated: false, delay: 1.5 },
            { x: 129, y: -14.6, toWrite: 'Oops, that might have been helpful.', animated: false, delay: 1.5 },
            { x: 90, y: -16.5, toWrite: 'The chompers fear can be used to control them.', animated: false, delay: 1.5 },

      ],
      goals: [
            //{ x: 0, y: 3, loc: {x:102,y: -12} },
            //            { startX: 14, startY: 7, lengthX: 4, lengthY: 1, type: "p" },

            { x: 14.5, y: 10, nLevel: "end" },
      ],

};

var creditsLevel = {
      music: "./sound/BMG/World of Horror - Home (Extended).mp3",
      slowback: [{x: -950, y: -600, sprite:"./sprites/Background/8-bit Ċ̸̢͉̝̖̘͕̦̰̫̩͎͘ţ̶̡̪̲̣̩̱̱̓͌͊͛̊͠ḩ̸̛̖͕̥͇̗͓̞̺̰͐͌̎̄̏͋̋͆̍͌͌̏͜ͅu̸̡̩̮̮̱̤̍̀͝ļ̴̪̺̘̭͓̒̎̔̆̂̾̽̐͌̋̑̕ư̵̙̒͐͑́̇̃͘̚͝ͅ.png", speed: 1, scale: 1.1, width: 1920, height: 1080}],
      walls: [
            { startX: -3, startY: 0, lengthX: 8, lengthY: 1, type: "thinPlatform" },

            { startX: -5, startY: 0, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 6, startY: 0, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: -5, startY: 5, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: -4, startY: 0, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 5, startY: 0, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 6, startY: 5, lengthX: 1, lengthY: 1, type: "tleft" },


            { startX: -5, startY: -6, lengthX: 12, lengthY: 1, type: "floor" },
            //{ startX: -5, startY: 0, lengthX: 1, lengthY: 1, type: "tright" },
            //{ startX: 6, startY: 0, lengthX: 1, lengthY: 1, type: "tleft" },

            { startX: -5, startY: -6, lengthX: 1, lengthY: 11, type: "wleft" },
            { startX: -4, startY: 5, lengthX: 10, lengthY: 1, type: "floor" },
            { startX: 6, startY: -6, lengthX: 1, lengthY: 11, type: "wright" },

            { startX: 3, startY: -3, lengthX: 3, lengthY: 1, type: "thinPlatform" },
            { startX: -4, startY: -3, lengthX: 3, lengthY: 1, type: "thinPlatform" },

      
      ],
      spawns: [
            { x: 0, y: 4 },
      ],
      backs: [
            { startX: -4, startY: -5, lengthX: 10, lengthY: 10, type: "darkBwall" },
      ],
      traps: [
            { x: -4, y: 2, type: "saw" },
            { x: 4, y: 2, type: "lsaw" },

      ],
      dtexts: [
            { x: -6, y: 8, toWrite: 'Thank you for playtesting corpses are forever.', animated: false, delay: 0 },
            { x: -4.2, y: 7, toWrite: 'This is as far as the levels go for now.', animated: true, delay: 1 },
            { x: -2, y: 6, toWrite: 'Below is the level select.', animated: true, delay: 2 },
            { x: 3.5, y: -3.5, toWrite: 'Two.', animated: false, delay: 0 },
            { x: -3.5, y: -3.5, toWrite: 'One.', animated: false, delay: 0 },
      ],
      goals: [
            { x: 3, y: -2, nLevel: "two", loc:{x:0, y:3} },
            { x: -4, y: -2, nLevel: "tutorial", loc:{x:0, y:3} },
      ],
      scripts: function(){
            tutorialLevel.goals[0].nLevel = "end"
      }
};

var tutorialLevel = {

      music: "./sound/BMG/World of Horror - Mode Select.mp3",
      //music: "./sound/BMG/World of Horror Soundtrack Mansion Combat.mp3",

      slowback: [{x: -1000, y: -3000, sprite:"./sprites/Background/8-bit-art-city.jpg", speed: 1, scale: 3.9, width: 1920, height: 1080}],
      backs: [
            { startX: -5, startY: 1, lengthX: 20, lengthY: 30, type: "bwall" },
            { startX: 14, startY: 11, lengthX: 20, lengthY: 20, type: "bwall" },
            { startX: 34, startY: 24, lengthX: 72, lengthY: 11, type: "bwall" },
            //{ startX: 49, startY: 23, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 44, startY: 18, lengthX: 61, lengthY: 6, type: "bwall" },
            { startX: 65, startY: 16, lengthX: 40, lengthY: 2, type: "bwall" },
            { startX: 97, startY: 34, lengthX: 90, lengthY: 4, type: "bwall" },


      ],
      walls: [
            { startX: -5, startY: 0, lengthX: 20, lengthY: 1, type: "floor" },
            //{ startX: -5, startY: 0, lengthX: 1, lengthY: 1, type: "tright" },
            //{ startX: 14, startY: 0, lengthX: 1, lengthY: 1, type: "tleft" },
            //right starting platform.
            //{ startX: 8, startY: 9, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 8, startY: 9, lengthX: 6, lengthY: 1, type: "floor" },
            //{ startX: 13, startY: 9, lengthX: 1, lengthY: 1, type: "tleft" },

            //left starting platform
            //{ startX: -4, startY: 8, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: -4, startY: 8, lengthX: 5, lengthY: 1, type: "floor" },
            //{ startX: 0, startY: 8, lengthX: 1, lengthY: 1, type: "tleft" },

            //Level floor 2
            //{ startX: 14, startY: 11, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 14, startY: 11, lengthX: 19, lengthY: 1, type: "floor" },

            { startX: -5, startY: 1, lengthX: 1, lengthY: 30, type: "wleft" },
            { startX: 14, startY: 1, lengthX: 1, lengthY: 10, type: "wleft" },
            { startX: 33, startY: 11, lengthX: 1, lengthY: 16, type: "wleft" },
            { startX: 29, startY: 14, lengthX: 1, lengthY: 6, type: "wright" },

            //Spawn 2 platform
           // { startX: 20, startY: 20, lengthX: 1, lengthY: 1, type: "tright" },
            //{ startX: 29, startY: 20, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 20, startY: 20, lengthX: 10, lengthY: 1, type: "floor" },

            //{ startX: 12, startY: 23, lengthX: 1, lengthY: 1, type: "tright" },
            //{ startX: 16, startY: 23, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 12, startY: 23, lengthX: 6, lengthY: 1, type: "floor" },

            //{ startX: -4, startY: 24, lengthX: 1, lengthY: 1, type: "tright" },
            //{ startX: 1, startY: 24, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: -4, startY: 24, lengthX: 6, lengthY: 1, type: "floor" },

            //{ startX: 22, startY: 26, lengthX: 1, lengthY: 1, type: "tright" },
            //{ startX: 27, startY: 26, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 22, startY: 26, lengthX: 6, lengthY: 1, type: "floor" },

            //ceiling #1
            { startX: -5, startY: 31, lengthX: 39, lengthY: 1, type: "floor" },

            //ceiling #2
            { startX: 34, startY: 35, lengthX: 63, lengthY: 1, type: "floor" },
            //{ startX: 96, startY: 35, lengthX: 1, lengthY: 1, type: "tleft" },

            //wall
            { startX: 33, startY: 31, lengthX: 1, lengthY: 4, type: "wleft" },
            { startX: 33, startY: 35, lengthX: 1, lengthY: 1, type: "tright" },


            //1st platform
            //{ startX: 33, startY: 27, lengthX: 1, lengthY: 1, type: "tright" },
            //{ startX: 38, startY: 27, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 33, startY: 27, lengthX: 6, lengthY: 1, type: "floor" },

            { startX: 38, startY: 26, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 39, startY: 26, lengthX: 1, lengthY: 1, type: "tleft" },



            { startX: 39, startY: 24, lengthX: 1, lengthY: 2, type: "wright" },

            //{ startX: 33, startY: 23, lengthX: 1, lengthY: 1, type: "tright" },
            //{ startX: 58, startY: 23, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 33, startY: 23, lengthX: 26, lengthY: 1, type: "floor" },

            { startX: 49, startY: 24, lengthX: 1, lengthY: 6, type: "wleft" },
            { startX: 45, startY: 31, lengthX: 1, lengthY: 4, type: "wright" },

            //{ startX: 49, startY: 30, lengthX: 1, lengthY: 1, type: "tright" },
            //{ startX: 58, startY: 30, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 49, startY: 30, lengthX: 10, lengthY: 1, type: "floor" },

            { startX: 58, startY: 24, lengthX: 1, lengthY: 6, type: "wright" },
            { startX: 63, startY: 21, lengthX: 1, lengthY: 14, type: "wleft" },



            //slide platform
            { startX: 52, startY: 21, lengthX: 11, lengthY: 1, type: "floor" },

            //After      { startX: 44, startY: 18, lengthX: 60, lengthY: 6, type: "bwall" },
            { startX: 43, startY: 18, lengthX: 1, lengthY: 5, type: "wright" },
            //{ startX: 44, startY: 18, lengthX: 1, lengthY: 1, type: "tright" },
            //{ startX: 65, startY: 18, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 44, startY: 18, lengthX: 22, lengthY: 1, type: "floor" },

            { startX: 65, startY: 15, lengthX: 40, lengthY: 1, type: "floor" },
            { startX: 65, startY: 16, lengthX: 1, lengthY: 2, type: "wright" },
            //{ startX: 65, startY: 15, lengthX: 1, lengthY: 1, type: "tright" },
            //{ startX: 105, startY: 15, lengthX: 1, lengthY: 1, type: "tleft" },

            { startX: 64, startY: 23, lengthX: 6, lengthY: 1, type: "floor" },

            { startX: 69, startY: 19, lengthX: 1, lengthY: 4, type: "wright" },
            { startX: 64, startY: 23, lengthX: 36, lengthY: 1, type: "floor" },
            //{ startX: 99, startY: 23, lengthX: 1, lengthY: 1, type: "tleft" },

            { startX: 69, startY: 19, lengthX: 31, lengthY: 1, type: "floor" },
            { startX: 100, startY: 19, lengthX: 1, lengthY: 10, type: "wright" },
            { startX: 100, startY: 29, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 99, startY: 29, lengthX: 1, lengthY: 1, type: "tright" },


            { startX: 105, startY: 15, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 43, startY: 18, lengthX: 1, lengthY: 3, type: "wright" },
            { startX: 105, startY: 15, lengthX: 1, lengthY: 18, type: "wleft" },

            { startX: 64, startY: 28, lengthX: 5, lengthY: 1, type: "floor" },
            //{ startX: 69, startY: 28, lengthX: 1, lengthY: 1, type: "tleft" },

            //{ startX: 71, startY: 31, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 71, startY: 31, lengthX: 7, lengthY: 1, type: "floor" },
            //{ startX: 77, startY: 31, lengthX: 1, lengthY: 1, type: "tleft" },

            //{ startX: 81, startY: 31, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 81, startY: 31, lengthX: 18, lengthY: 1, type: "floor" },
            //{ startX: 98, startY: 31, lengthX: 1, lengthY: 1, type: "tleft" },

            //{ startX: 99, startY: 33, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 99, startY: 34, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 100, startY: 34, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 99, startY: 33, lengthX: 89, lengthY: 1, type: "floor" },
            //{ startX: 190, startY: 33, lengthX: 1, lengthY: 1, type: "tleft" },
           // { startX: 189, startY: 34, lengthX: 1, lengthY: 1, type: "tright" },
            //{ startX: 190, startY: 34, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 96, startY: 36, lengthX: 1, lengthY: 2, type: "wright" },
            { startX: 187, startY: 34, lengthX: 1, lengthY: 4, type: "wright" },

            { startX: 96, startY: 36, lengthX: 1, lengthY: 2, type: "wright" },
            { startX: 97, startY: 38, lengthX: 91, lengthY: 1, type: "floor" },
            { startX: 96, startY: 38, lengthX: 1, lengthY: 1, type: "tright" },


      ],
      boxes: [
            { x: 1, y: 1 },
            { x: 68, y: 24 }],
      corpses: [
            { x: 6, y: 1, type: "duck" },
            //{ x: 78, y: 25, type: "duck" },
            { x: 3.25, y: 5, type: "duck" },
            { x: 2.5, y: 5, type: "duck" },
            { x: 4.5, y: 5, type: "duck", facing: "l" },
            { x: 2.75, y: 6, type: "duck" },
            { x: 2.5, y: 3, type: "chomper", facing: "l" },
            { x: 2.6, y: 9, type: "duck" },
            { x: 8.5, y: 5, type: "chomper" },
            { x: 8.7, y: 7, type: "duck", facing: "l" },
            { x: 7, y: 6, type: "duck" },
            { x: 8, y: 9, type: "duck" },
            { x: 8.2, y: 10, type: "duck", facing: "l" },
            { x: 5, y: 5, type: "duck" },
            { x: 6, y: 6, type: "duck" },
            { x: 2.4, y: 11, type: "duck" },
            { x: 2.6, y: 30, type: "duck" },
            { x: 2.9, y: 29, type: "duck" },
            { x: 5.3, y: 29, type: "chomper" },
            //{x: -2.3,y: 30,type: "chomper"},
            //{x: -4,y: 30,type: "duck"},
            { x: 5.3, y: 30, type: "duck" },
            { x: 11, y: 26, type: "chomper" },
            { x: 12, y: 28, type: "duck" },
            { x: 12, y: 29, type: "lurker" },
            { x: -3, y: 15, type: "lurker", facing: "l" },
            { x: 26, y: 18, type: "lurker", facing: "r" },
            { x: 26, y: 19, type: "lurker", facing: "l" },
            { x: 26, y: 20, type: "lurker", facing: "l" },

            //{ startX: 49, startY: 23, lengthX: 1, lengthY: 1, type: "tleft" },
            { x: 44, y: 24, type: "lurker", facing: "l" },

      ],
      traps: [
            { x: -3.3, y: 16, type: "saw" },
            { x: 29, y: 27, type: "lsaw" },
            { x: 54, y: 33.5, type: "lsaw" },
            //Next to.            { startX: 58, startY: 24, lengthX: 1, lengthY: 6, type: "wright" },
            { x: 59, y: 29, type: "saw" },
            { x: 59, y: 27, type: "saw" },
            { x: 59, y: 25, type: "saw" },


            //,
            //{   x: -10,    y: 13,     type: "bigSaw" }//,
            //{
            //{x: -10, y: 7, type: "spike"},
            
            
      ],
      doors: [
            //{ x: 33, y: 32 },
            //{ x: 33, y: 31 },
            { x: 33, y: 30, key: 1 },
            { x: 33, y: 29, key: 1 },
            { x: 33, y: 28, key: 1 }
      ],
      chompers: [
            //{ x: 20, y: 15 }
            // In             { startX: 66, startY: 15, lengthX: 40, lengthY: 1, type: "floor" },

            { x: 80, y: 16.5 }
      ],
      lurkers: [
            //{ x: 11, y: 5 },
            // { x: 40, y: 25  },
            // { x: 50, y: 25  },
            // { x: 60, y: 25  },
            // { x: 70, y: 25  },
            //  { x: 80, y: 25  },
            //  { x: 85, y: 25  },
            { x: 100, y: 35 },
            { x: 110, y: 35 },
            { x: 120, y: 35 },
            // { x: 10, y: 15 },
      ],
      hoppers: [
            { x: 89, y: 25 },
            { x: 83, y: 25 },

            { x: 84, y: 25 },

            //on spike section
            {x:220 ,y: 5},   

      ],
      buttons: [{ x: -3, y: 24.55, key: 1 }],
      //textboxes: [
      //      { x: 0, y: 16 },
      //      { x: 16, y: 16 }
      //],
      spawns: [
            { x: -2, y: 7 },
            { x: 25, y: 19 },
            { x: 34, y: 34 },
            // At end of slide platform   { startX: 52, startY: 21, lengthX: 11, lengthY: 1, type: "floor" },
            { x: 49, y: 22 },
            { x: 92, y: 34 },
            { x: 99, y: 32 },


      ],
      dtexts: [
            { x: 16, y: 7, toWrite: 'Uhg my head.', animated: true, delay: 2, key: -1 },
            { x: 16, y: 6, toWrite: 'Everyones.... dead.', animated: true, delay: 5, key: -1 },
            { x: 16, y: 5, toWrite: 'The corpses.... Are everywhere.', animated: true, delay: 7, key: -1 },
            { x: 16, y: 4, toWrite: 'This.... Is beautiful, I need more corpses.', animated: true, delay: 9, key: -1 },
            { x: 16, y: 3, toWrite: 'Lets go make them.', animated: true, delay: 11, key: -1 },
            { x: 16, y: 2, toWrite: 'Press K to pickup, drop, or throw corpses.', animated: true, delay: 13, key: -1 },
            { x: 16, y: 1, toWrite: 'Use the corpses to escape, corpses ARE platforms.', animated: true, delay: 13, key: -1 },


            { x: -16, y: 3, toWrite: 'Press space to jump.', animated: false, delay: 0, key: -1 },
            { x: -14.5, y: 2, toWrite: 'AD To walk.', animated: false, delay: 0, key: -1 },
            { x: -15, y: 1, toWrite: 'Shift to sprint.', animated: false, delay: 0, key: -1 },
            { x: -17, y: 0, toWrite: 'S to fall through platforms.', animated: false, delay: 0, key: -1 },
            { x: -18, y: -1, toWrite: '(Only some "platforms" let you.)', animated: false, delay: 0, key: -1 },



            { x: 35, y: 16, toWrite: 'Jumping into a wall lets you wall slide.', animated: false, delay: 0, key: -1 },
            { x: 35, y: 15, toWrite: 'You can jump again while wall sliding.', animated: false, delay: 0, key: -1 },
            { x: 35, y: 13, toWrite: 'You cannot wall slide while holding corpses.', animated: true, delay: 20, key: -1 },
            { x: 35, y: 14, toWrite: 'The cages are checkpoints, jump into them to save your progress.', animated: false, delay: 0, key: -1 },

            { x: 4, y: 34, toWrite: 'Pressing down while running lets you slide.', animated: false, delay: 0, key: -1 },
            { x: 4, y: 33, toWrite: 'Jumping while sliding gives you a sorter, faster jump.', animated: false, delay: 0, key: -1 },
            { x: 4, y: 32, toWrite: 'Lightly tapping the jump button also gives you a short jump.', animated: false, delay: 0, key: -1 },
            { x: 4, y: 31.2, toWrite: 'Corpses Inherit your jumping momentum when thrown.', animated: false, delay: 0, key: -1 },

            { x: 80, y: 13, toWrite: 'The chomper is a fierce, but timid foe. If you corner it, it will slay you.', animated: false, delay: 0, key: -1 },
            { x: 80, y: 12, toWrite: 'Sadly, your flippers alone cannot slay it,', animated: false, delay: 0, key: -1 },
            { x: 80, y: 11, toWrite: 'Boxes make excellent weapons, but other heavy things can be lethal....', animated: false, delay: 0, key: -1 },


            //{ x: 96, y: 43, toWrite: 'If you have gotten this high, that is all for now.', animated: false, delay: 0 },
            ///{ x: 96, y: 42, toWrite: 'Thank you for playtesting corpses are forever.', animated: false, delay: 0 },
            //{ x: 132, y: 41, toWrite: 'Many of you liked the idea of the game ending with a jump into the bottomless Abyss.', animated: false, delay: 0 },
            //{ x: 160, y: 40, toWrite: 'So at the end of this hall, go ahead. Take a dive.', animated: false, delay: 0 },
            //{ x: 176, y: 39, toWrite: 'In the future, there will be about two more zones to level one, then a level two however.', animated: false, delay: 0 },

            { x: -3, y: 22, toWrite: 'Button has been pressed.', animated: false, delay: 0, key: 1 },
      ],
      goals: [

            { x: 184, y: 34, nLevel: "two"},
            { x:  11, y: 1, nLevel: "end"},
            //{ x: 11, y: 1, nLevel: "two", loc: {x:50,y: 2}},
            //{ x:-4, y :9, nLevel: "two", loc: {x:60 ,y: 8}},
      ],
      //title: {x: 0, y: 0, title:true}

};

/** 
var titleScreen ={
      music: "./sound/BMG/World of Horror - Home (Extended).mp3",
      dtexts =[
            { x: 0, y: 0, toWrite: 'Start Game!', animated: false, delay: 0, key: -1 },
            { x: 0, y: 0, toWrite: 'Options', animated: false, delay: 0, key: -1 },
            { x: 0, y: 0, toWrite: 'Help', animated: false, delay: 0, key: -1 },
            { x: 0, y: 0, toWrite: 'Quit Game', animated: false, delay: 0, key: -1 },
      ],
};
*/

let allLevels = {
      two: levelTwo,
      tutorial: tutorialLevel,
      end: creditsLevel,
      //title : titleScreen,
};