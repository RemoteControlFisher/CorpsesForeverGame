var tutorialLevel = {
      music: "./sound/World of Horror - Mode Select.mp3",
      backs: [
            { startX: -5, startY: 1, lengthX: 20, lengthY: 30, type: "bwall" },
            { startX: 14, startY: 11, lengthX: 20, lengthY: 20, type: "bwall" },
            { startX: 34, startY: 24, lengthX: 72, lengthY: 11, type: "bwall" },
      //            //{ startX: 49, startY: 23, lengthX: 1, lengthY: 1, type: "tleft" },
      { startX: 44, startY: 18, lengthX: 61, lengthY: 6, type: "bwall" },
      { startX: 65, startY: 16, lengthX: 40, lengthY: 2, type: "bwall" },

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
            { startX: 100, startY: 19, lengthX: 1, lengthY: 8, type: "wleft" },
            { startX: 100, startY: 27, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 99, startY: 27, lengthX: 1, lengthY: 1, type: "tright" },




            { startX: 105, startY: 15, lengthX: 1, lengthY: 1, type: "tleft" },
            { startX: 43, startY: 18, lengthX: 1, lengthY: 3, type: "wright" },
            { startX: 105, startY: 15, lengthX: 1, lengthY: 25, type: "wleft" },

            { startX: 64, startY: 28, lengthX: 5, lengthY: 1, type: "floor" },
            { startX: 69, startY: 28, lengthX: 1, lengthY: 1, type: "tleft" },

            { startX: 71, startY: 31, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 72, startY: 31, lengthX: 5, lengthY: 1, type: "floor" },
            { startX: 77, startY: 31, lengthX: 1, lengthY: 1, type: "tleft" },

            { startX: 81, startY: 31, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 82, startY: 31, lengthX: 16, lengthY: 1, type: "floor" },
            { startX: 98, startY: 31, lengthX: 1, lengthY: 1, type: "tleft" },

            { startX: 99, startY: 33, lengthX: 1, lengthY: 1, type: "tright" },
            { startX: 100, startY: 33, lengthX: 4, lengthY: 1, type: "floor" },
            { startX: 104, startY: 33, lengthX: 1, lengthY: 1, type: "tleft" },


            //KIETS LEVEL SEGMENT: Place later in the level.
            // bottom platform
            //{ startX: 34, startY: 19, lengthX: 57, lengthY: 1, type: "floor" },
            //2nd platform
            //{ startX: 55, startY: 27, lengthX: 5, lengthY: 1, type: "floor" },
            //3nd platforms
            //{ startX: 73, startY: 27, lengthX: 3, lengthY: 1, type: "floor" },
            //4nd platform
            //{ startX: 87, startY: 27, lengthX: 1, lengthY: 1, type: "floor" },
            //wall platforms
            //{ startX: 90, startY: 20, lengthX: 1, lengthY: 7, type: "wleft" },
            //end #1 platform
            //{ startX: 90, startY: 27, lengthX: 3, lengthY: 1, type: "floor" },
            //end #2 platform
            //{ startX: 95, startY: 27, lengthX: 3, lengthY: 1, type: "floor" },
            //#2 bottom platform
            //{ startX: 81, startY: 15, lengthX: 17, lengthY: 1, type: "floor" },
            //wall platform
            //{ startX: 97, startY: 15, lengthX: 1, lengthY: 21, type: "wleft" },
            //wall block platform
            //{ startX: 90, startY: 18, lengthX: 1, lengthY: 1, type: "wright" },
            //slide platform
            //{ startX: 81, startY: 17, lengthX: 10, lengthY: 1, type: "floor" },

            ],
      boxes: [
            { x: 1, y: 1 },
            { x: 68, y: 24 }],
      corpses: [
            { x: 6, y: 1, type: "duck" },
            { x: 3.25, y: 5, type: "duck" },
            { x: 2.5,y: 5,type: "duck"},
            {x: 4.5,y: 5,type: "duck",facing: "l"},
            {x: 2.75, y: 6, type: "duck"},
            {x: 2.5,y: 3, type: "chomper",facing: "l"},
            { x: 2.6,y: 9,type: "duck"},
            { x: 8.5, y: 5,type: "chomper"},
            {x: 8.7, y: 7,type: "duck",facing: "l"},
            { x: 7,y: 6,type: "duck"},
            { x: 8, y: 9,type: "duck"},
            {x: 8.2,y: 10,type: "duck",facing: "l"},
            {x: 5,y: 5,type: "duck"},
            { x: 6, y: 6,type: "duck"},
            { x: 2.4, y: 11, type: "duck"},
            {x: 2.6,y: 30,type: "duck"},
            {x: 2.9,y: 29,type: "duck"},
            {x: 5.3,y: 29,type: "chomper" },
            //{x: -2.3,y: 30,type: "chomper"},
            //{x: -4,y: 30,type: "duck"},
            { x: 5.3,y: 30,type: "duck"},
            {x: 11,y: 26,type: "chomper"},
            {x: 12,y: 28,type: "duck"},
            {x: 12,y: 29,type: "lurker"},
            {x: -3,y: 15,type: "lurker",facing: "l"},
            {x: 26,y: 18,type: "lurker",facing: "r"},
            {x: 26,y: 19,type: "lurker",facing: "l"},
            {x: 26,y: 20,type: "lurker",facing: "l"},

            //{ startX: 49, startY: 23, lengthX: 1, lengthY: 1, type: "tleft" },
            {x: 44,y: 24,type: "lurker",facing: "l"},

      ],
      traps: [
            //{ x: 95, y: 20, type: "lsaw" }, 
            //{x: 91,y: 20,type: "saw"}, 
            //{x: 95,y: 23,type: "lsaw"}, 
            //{ x: 91,y: 23,type: "saw"}, 
            //{x: 95, y: 26, type: "lsaw"},
            //{x: 91,y: 26,type: "saw"}, 
            //{x: 85,y: 27,type: "saw" }, 
            //{x: 88,y: 27,type: "saw"}, 
            //{x: 76,y: 27,type: "saw" }, 
            //{x: 60,y: 27,type: "saw"}, 
            //{x: 71,y: 27,type: "saw"}, 
            //{x: 44,y: 27,type: "saw"}, 
            //{x: 53,y: 27,type: "saw"}, 
            {x: -3.3,y: 16,type: "saw"},
            {x: 29,y: 27,type: "lsaw"},
            {x: 54,y: 33.5,type: "lsaw"},
            //Next to.            { startX: 58, startY: 24, lengthX: 1, lengthY: 6, type: "wright" },
            {x: 59,y: 29,type: "saw"},
            {x: 59,y: 27,type: "saw"},
            {x: 59,y: 25,type: "saw"},


            //,
            //{   x: -10,    y: 13,     type: "bigSaw" }//,
            //{
            //      x: -10,
            //      y: 7,
            //      type: "spike"
            //}
      ],
      doors: [
            //{ x: 33, y: 32 },
            //{ x: 33, y: 31 },
            { x: 33, y: 30, key: 1 },
            { x: 33, y: 29, key: 1 },
            { x: 33, y: 28 , key: 1 }
      ],
      chompers: [
             //{ x: 20, y: 15 }
            // In             { startX: 66, startY: 15, lengthX: 40, lengthY: 1, type: "floor" },

            {x: 80, y:16.5}
      ],
      lurkers: [
            //{ x: 11, y: 5 },
            // { x: 40, y: 25  },
            // { x: 50, y: 25  },
            // { x: 60, y: 25  },
            // { x: 70, y: 25  },
            //  { x: 80, y: 25  },
            //  { x: 85, y: 25  },
               { x: 87, y: 25  }
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


            { x: 96, y: 40, toWrite: 'If you have gotten this high, that is all for now.', animated: false, delay: 0 },
            { x: 96, y: 39, toWrite: 'Thank you for playtesting corpses are forever.', animated: false, delay: 0 },

      ]

};
