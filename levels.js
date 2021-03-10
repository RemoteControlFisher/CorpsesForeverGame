var levelTwo = {
      music: "./sound/BMG/World of Horror Soundtrack Mansion Combat.mp3",
      walls: [
            { startX: -3, startY: 0, lengthX: 13, lengthY: 1, type: "thinPlatform" },
            { startX: -3, startY: -2, lengthX: 14, lengthY: 1, type: "floor" },
            { startX: -4, startY: -2, lengthX: 1, lengthY: 1, type: "tright" },

            { startX: -6, startY: 1, lengthX: 1, lengthY: 5, type: "wleft" },
            { startX: 11, startY: -2, lengthX: 1, lengthY: 9, type: "wright" },
            { startX: -5, startY: 6, lengthX: 16, lengthY: 1, type: "floor" },
            { startX: -7, startY: 0, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: -6, startY: 0, lengthX: 2, lengthY: 1, type: "floor" },
            { startX: -4, startY: 0, lengthX: 1, lengthY: 1, type: "tleft" },
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

            { startX: -7, startY: -16, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: -6, startY: -16, lengthX: 20, lengthY: 1, type: "floor" },

            { startX: 14, startY: -17, lengthX: 25, lengthY: 1, type: "floor" },
            { startX: 13, startY: -17, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 14, startY: -16, lengthX: 1, lengthY: 1, type: "tleft" },


            { startX: 1, startY: -14, lengthX: 3, lengthY: 1, type: "floor" },
            { startX: 0, startY: -14, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 4, startY: -14, lengthX: 1, lengthY: 1, type: "tleft" },
             
            //Spike pit
            { startX: 38, startY: -29, lengthX: 7, lengthY: 1, type: "floor" },    // x: 191, y: 20  difference x = 153 y: -48
            { startX: 44, startY: -30, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 38, startY: -29, lengthX: 1, lengthY: 1, type: "tright" },
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
            { startX: 140, startY: -19, lengthX: 4, lengthY: 1, type: "floor" },
            //#2 bottom platform
            //{ startX: 136, startY: -43, lengthX: 17, lengthY: 1, type: "floor" },
            //wall platform
            { startX: 143, startY: -38, lengthX: 1, lengthY: 19, type: "wleft" },
             // helper platform
             { startX: 94, startY: -36, lengthX: 1, lengthY: 1, type: "floor" },
            // helper platform
            { startX: 95, startY: -36, lengthX: 1, lengthY: 1, type: "tleft" },
            //wall block platform
            //{ startX: 145, startY: -40, lengthX: 1, lengthY: 1, type: "wright" },
            //slide platform
            //{ startX: 136, startY: -39, lengthX: 10, lengthY: 1, type: "floor" },

      ],
      boxes: [
            { x: 3, y: -13 },
            { x: 41, y: -25 },



      ],
      hoppers: [
            { x: 3, y: -11 },
            //{ x: 63,y: -35}   //dies?
      ],
      chompers: [
            { x: 94, y: -33 },
            { x: 130, y: -33}
      ],
      lurkers: [
            //{ x: 93, y: -32},
            { x: 115, y: -32 },
            { x: 110, y: -32 },
            { x: 120, y: -32 },
      ],
      traps: [
            
            { x: 15, y: -16 },
            { x: 16, y: -16 },
            { x: 17, y: -16 },
            { x: 18, y: -16 },
            { x: 19, y: -16 },
            { x: 20, y: -16 },
            { x: 21, y: -16 },
            { x: 22, y: -16 },
            { x: 23, y: -16 },
            { x: 24, y: -16 },
            { x: 25, y: -16 },
            { x: 26, y: -16 },
            { x: 27, y: -16 },
            { x: 28, y: -16 },
            { x: 29, y: -16 },
            { x: 30, y: -16 },
            { x: 31, y: -16 },
            { x: 32, y: -16 },
            { x: 33, y: -16 },
            //{ x: 34, y: -16 },
            //{ x: 35, y: -16 },
            //{ x: 36, y: -16 },
            //{ x: 37, y: -16 },
            
            //spike for spike pit
            {x: 48, y: -33, type: "spike"},
            {x: 49, y: -33, type: "spike"},
            {x: 50, y: -33, type: "spike"},
            {x: 51, y: -33, type: "spike"},
            {x: 52, y: -33, type: "spike"},
            {x: 53, y: -33, type: "spike"},
            {x: 54, y: -33, type: "spike"},
            {x: 55, y: -33, type: "spike"},
            {x: 56, y: -33, type: "spike"},
            {x: 57, y: -33, type: "spike"},
            {x: 58, y: -33, type: "spike"},
            {x: 59, y: -33, type: "spike"},
            {x: 59.6, y: -33, type: "spike"},
            
            {x: 61, y: -38, type: "spike"},
            {x: 62, y: -38, type: "spike"},
            {x: 63, y: -38, type: "spike"},
            {x: 64, y: -38, type: "spike"},
            {x: 65, y: -38, type: "spike"},
            {x: 66, y: -38, type: "spike"},
            {x: 67, y: -38, type: "spike"},
            {x: 68, y: -38, type: "spike"},
            {x: 69, y: -38, type: "spike"},
            {x: 70, y: -38, type: "spike"},
            {x: 71, y: -38, type: "spike"},
            {x: 72, y: -38, type: "spike"},
            {x: 73, y: -38, type: "spike"},
            {x: 74, y: -38, type: "spike"},
            {x: 75, y: -38, type: "spike"},
            {x: 76, y: -38, type: "spike"},
            {x: 76.6, y: -38, type: "spike"},

            //{x: 231, y: 17, type: "spike"},
            {x: 79, y: -33, type: "spike"},
            {x: 80, y: -33, type: "spike"},
            {x: 81, y: -33, type: "spike"},
            {x: 81.6, y: -33, type: "spike"},
            
            //keiso saw
            //{ x: 97, y: -31, type: "saw" }, 
            { x: 107,y: -29,type: "saw"}, 
            {x: 117,y: -26,type: "lsaw"}, 
            //{ x: 131,y: -24,type: "saw"}, 
            {x: 128, y: -24, type: "lsaw"},
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
            { x: 90, y: -28}
      ],
      backs: [
            { startX: -6, startY: -16, lengthX: 60, lengthY: 22, type: "darkBwall" },
            { startX: 38, startY: -40, lengthX: 106, lengthY: 24, type: "darkBwall" },
      ],
      corpses: [
            { x: 76.5, y: -33, type: "lurker", facing: "l" },
            { x: 136, y: -21, type: "lurker", facing: "l" },
            { x: 94, y: -35, type: "lurker", facing: "l" },
            { x: 118, y: -37 },
            { x: 41, y: -20 },
            { x: 41, y: -25, type: "chomper" },

      ],
      dtexts: [
            { x: -4, y: 7, toWrite: 'You can fall through platforms by crouching.', animated: true, delay: 1 },
            { x: -4.5, y: 6.4, toWrite: 'Holding shift prevents you from falling through.', animated: true, delay: 1.5 },
      ],
      goals: [
            //{ x: -5, y: 0, loc: {x:0,y: 9} },
            { x: 12, y: 1, nLevel: "end" },
      ],

};

var creditsLevel = {
      walls: [
            { startX: -3, startY: 0, lengthX: 8, lengthY: 1, type: "thinPlatform" },

            { startX: -5, startY: 0, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 6, startY: 0, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: -5, startY: 5, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: -4, startY: 0, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 5, startY: 0, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 6, startY: 5, lengthX: 1, lengthY: 1, type: "tleft" },


            { startX: -4, startY: -6, lengthX: 10, lengthY: 1, type: "floor" },
            { startX: -5, startY: 0, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 6, startY: 0, lengthX: 1, lengthY: 1, type: "tleft" },

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
            { x: 3.5, y: -3.5, toWrite: 'Two.', animated: true, delay: 0 },
            { x: -3.5, y: -3.5, toWrite: 'One.', animated: true, delay: 0 },

      ],
      goals: [
            { x: 3, y: -2, nLevel: "two" },
            { x: -4, y: -2, nLevel: "tutorial" },
      ],
      scripts: function(){
            tutorialLevel.goals[0].nLevel = "end"
      }
}

var tutorialLevel = {

      title: [{x: 0, y: 0, title:true}],

      music: "./sound/BMG/World of Horror - Mode Select.mp3",
      //music: "./sound/BMG/World of Horror Soundtrack Mansion Combat.mp3",
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
            { startX: -4, startY: 0, lengthX: 18, lengthY: 1, type: "floor" },
            { startX: -5, startY: 0, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 14, startY: 0, lengthX: 1, lengthY: 1, type: "tleft" },
            //right starting platform.
            { startX: 8, startY: 9, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 9, startY: 9, lengthX: 4, lengthY: 1, type: "floor" },
            { startX: 13, startY: 9, lengthX: 1, lengthY: 1, type: "tleft" },

            //left starting platform
            { startX: -4, startY: 8, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: -3, startY: 8, lengthX: 3, lengthY: 1, type: "floor" },
            { startX: 0, startY: 8, lengthX: 1, lengthY: 1, type: "tleft" },

            //Level floor 2
            { startX: 14, startY: 11, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 15, startY: 11, lengthX: 18, lengthY: 1, type: "floor" },

            { startX: -5, startY: 1, lengthX: 1, lengthY: 30, type: "wright" },
            { startX: 14, startY: 1, lengthX: 1, lengthY: 10, type: "wleft" },
            { startX: 33, startY: 11, lengthX: 1, lengthY: 16, type: "wleft" },
            { startX: 29, startY: 14, lengthX: 1, lengthY: 6, type: "wright" },

            //Spawn 2 platform
            { startX: 20, startY: 20, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 29, startY: 20, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 21, startY: 20, lengthX: 8, lengthY: 1, type: "floor" },

            { startX: 12, startY: 23, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 16, startY: 23, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 13, startY: 23, lengthX: 3, lengthY: 1, type: "floor" },

            { startX: -4, startY: 24, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 1, startY: 24, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: -3, startY: 24, lengthX: 4, lengthY: 1, type: "floor" },

            { startX: 22, startY: 26, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 27, startY: 26, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 23, startY: 26, lengthX: 4, lengthY: 1, type: "floor" },

            //ceiling #1
            { startX: -5, startY: 31, lengthX: 39, lengthY: 1, type: "floor" },

            //ceiling #2
            { startX: 34, startY: 35, lengthX: 62, lengthY: 1, type: "floor" },
            { startX: 96, startY: 35, lengthX: 1, lengthY: 1, type: "tleft" },

            //wall
            { startX: 33, startY: 31, lengthX: 1, lengthY: 4, type: "wleft" },
            { startX: 33, startY: 35, lengthX: 1, lengthY: 1, type: "tright" },


            //1st platform
            { startX: 33, startY: 27, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 38, startY: 27, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 34, startY: 27, lengthX: 4, lengthY: 1, type: "floor" },

            { startX: 38, startY: 26, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 39, startY: 26, lengthX: 1, lengthY: 1, type: "tleft" },



            { startX: 39, startY: 24, lengthX: 1, lengthY: 2, type: "wright" },

            { startX: 33, startY: 23, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 58, startY: 23, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 34, startY: 23, lengthX: 24, lengthY: 1, type: "floor" },

            { startX: 49, startY: 24, lengthX: 1, lengthY: 6, type: "wleft" },
            { startX: 45, startY: 31, lengthX: 1, lengthY: 4, type: "wright" },

            { startX: 49, startY: 30, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 58, startY: 30, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 50, startY: 30, lengthX: 8, lengthY: 1, type: "floor" },

            { startX: 58, startY: 24, lengthX: 1, lengthY: 6, type: "wright" },
            { startX: 63, startY: 21, lengthX: 1, lengthY: 15, type: "wleft" },



            //slide platform
            { startX: 52, startY: 21, lengthX: 11, lengthY: 1, type: "floor" },

            //After      { startX: 44, startY: 18, lengthX: 60, lengthY: 6, type: "bwall" },
            { startX: 43, startY: 18, lengthX: 1, lengthY: 6, type: "wright" },
            { startX: 44, startY: 18, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 65, startY: 18, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 45, startY: 18, lengthX: 20, lengthY: 1, type: "floor" },

            { startX: 65, startY: 15, lengthX: 40, lengthY: 1, type: "floor" },
            { startX: 65, startY: 16, lengthX: 1, lengthY: 2, type: "wright" },
            { startX: 65, startY: 15, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 105, startY: 15, lengthX: 1, lengthY: 1, type: "tleft" },

            { startX: 64, startY: 23, lengthX: 6, lengthY: 1, type: "floor" },

            { startX: 69, startY: 19, lengthX: 1, lengthY: 4, type: "wright" },
            { startX: 64, startY: 23, lengthX: 35, lengthY: 1, type: "floor" },
            { startX: 99, startY: 23, lengthX: 1, lengthY: 1, type: "tleft" },

            { startX: 69, startY: 19, lengthX: 31, lengthY: 1, type: "floor" },
            { startX: 100, startY: 19, lengthX: 1, lengthY: 10, type: "wright" },
            { startX: 100, startY: 29, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 99, startY: 29, lengthX: 1, lengthY: 1, type: "tright" },


            { startX: 105, startY: 15, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 43, startY: 18, lengthX: 1, lengthY: 3, type: "wright" },
            { startX: 105, startY: 15, lengthX: 1, lengthY: 18, type: "wleft" },

            { startX: 64, startY: 28, lengthX: 5, lengthY: 1, type: "floor" },
            { startX: 69, startY: 28, lengthX: 1, lengthY: 1, type: "tleft" },

            { startX: 71, startY: 31, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 72, startY: 31, lengthX: 5, lengthY: 1, type: "floor" },
            { startX: 77, startY: 31, lengthX: 1, lengthY: 1, type: "tleft" },

            { startX: 81, startY: 31, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 82, startY: 31, lengthX: 16, lengthY: 1, type: "floor" },
            { startX: 98, startY: 31, lengthX: 1, lengthY: 1, type: "tleft" },

            { startX: 99, startY: 33, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 99, startY: 34, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 100, startY: 34, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 100, startY: 33, lengthX: 90, lengthY: 1, type: "floor" },
            { startX: 190, startY: 33, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 189, startY: 34, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 190, startY: 34, lengthX: 1, lengthY: 1, type: "tleft" },

            { startX: 96, startY: 36, lengthX: 1, lengthY: 2, type: "wright" },
            { startX: 97, startY: 38, lengthX: 86, lengthY: 1, type: "floor" },
            { startX: 96, startY: 38, lengthX: 1, lengthY: 1, type: "tright" },


      ],
      boxes: [
            { x: 1, y: 1 },
            { x: 68, y: 24 }],
      corpses: [
            { x: 6, y: 1, type: "duck" },
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
            { x: 120, y: 35 },
            { x: 130, y: 35 },
            { x: 140, y: 35 },
      ],
      hoppers: [
            { x: 89, y: 25 },
            { x: 83, y: 25 },

            { x: 84, y: 25 },

            //on spike section
            {x:220 ,y: 5},   

      ],
      buttons: [{ x: -3, y: 24.55, key: 1 }],
      textboxes: [
            { x: 0, y: 16 },
            { x: 16, y: 16 }
      ],
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
            { x: 16, y: 7, toWrite: 'Uhg my head.', animated: true, delay: 3 },
            { x: 16, y: 6, toWrite: 'Everyones.... dead.', animated: true, delay: 7 },
            { x: 16, y: 5, toWrite: 'The corpses.... Are everywhere.', animated: true, delay: 9 },
            { x: 16, y: 4, toWrite: 'This.... Is beautiful, I need more corpses.', animated: true, delay: 13 },
            { x: 16, y: 3, toWrite: 'Lets go make them.', animated: true, delay: 16 },
            { x: 16, y: 2, toWrite: 'Press K to pickup, drop, or throw corpses.', animated: true, delay: 18 },
            { x: 16, y: 1, toWrite: 'Use the corpses to escape, corpses ARE platforms.', animated: true, delay: 18 },


            { x: -16, y: 3, toWrite: 'Press space to jump.', animated: false, delay: 0 },
            { x: -14.5, y: 2, toWrite: 'AD To walk.', animated: false, delay: 0 },
            { x: -15, y: 1, toWrite: 'Shift to sprint.', animated: false, delay: 0 },
            { x: -17, y: 0, toWrite: 'S to fall through platforms.', animated: false, delay: 0 },
            { x: -18, y: -1, toWrite: '(Only some "platforms" let you.)', animated: false, delay: 0 },



            { x: 35, y: 16, toWrite: 'Jumping into a wall lets you wall slide.', animated: false, delay: 0 },
            { x: 35, y: 15, toWrite: 'You can jump again while wall sliding.', animated: false, delay: 0 },
            { x: 35, y: 13, toWrite: 'You cannot wall slide while holding corpses.', animated: true, delay: 20 },
            { x: 35, y: 14, toWrite: 'The cages are checkpoints, jump into them to save your progress.', animated: false, delay: 0 },

            { x: 4, y: 34, toWrite: 'Pressing down while running lets you slide.', animated: false, delay: 0 },
            { x: 4, y: 33, toWrite: 'Jumping while sliding gives you a sorter, faster jump.', animated: false, delay: 0 },
            { x: 4, y: 32, toWrite: 'Lightly tapping the jump button also gives you a short jump.', animated: false, delay: 0 },
            { x: 4, y: 31.2, toWrite: 'Corpses Inherit your jumping momentum when thrown.', animated: false, delay: 0 },

            { x: 80, y: 13, toWrite: 'The chomper is a fierce, but timid foe. If you corner it, it will slay you.', animated: false, delay: 0 },
            { x: 80, y: 12, toWrite: 'Sadly, your flippers alone cannot slay it,', animated: false, delay: 0 },
            { x: 80, y: 11, toWrite: 'Boxes make excellent weapons, but other heavy things can be lethal....', animated: false, delay: 0 },


            { x: 96, y: 43, toWrite: 'If you have gotten this high, that is all for now.', animated: false, delay: 0 },
            { x: 96, y: 42, toWrite: 'Thank you for playtesting corpses are forever.', animated: false, delay: 0 },
            { x: 132, y: 41, toWrite: 'Many of you liked the idea of the game ending with a jump into the bottomless Abyss.', animated: false, delay: 0 },
            { x: 160, y: 40, toWrite: 'So at the end of this hall, go ahead. Take a dive.', animated: false, delay: 0 },
            { x: 176, y: 39, toWrite: 'In the future, there will be about two more zones to level one, then a level two however.', animated: false, delay: 0 },

      ],
      goals: [
            //{ x: 11, y: 1, loc: {x: 73, y:22}},
            { x: 189, y: 35, nLevel: "two"},
            { x: -4, y: 9, nLevel: "two"}

      ]

};

let allLevels = {
      two: levelTwo,
      tutorial: tutorialLevel,
      end: creditsLevel
};