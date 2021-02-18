var tutorialLevel = {
      backs: [{
            startX: -5,
            startY: 1,
            lengthX: 20,
            lengthY: 40,
            type: "bwall"
      },
      {
            startX: 14,
            startY: 11,
            lengthX: 20,
            lengthY: 30,
            type: "bwall"
      },
      {
            startX: 34,           //slime area
            startY: 11,
            lengthX: 65,
            lengthY: 30,
            type: "bwall"
      }],
      walls: [{
            startX: -4,
            startY: 0,
            lengthX: 18,
            lengthY: 1,
            type: "floor"
      },
      {
            startX: -5,
            startY: 0,
            lengthX: 1,
            lengthY: 1,
            type: "tright"
      },
      {
            startX: 14,
            startY: 0,
            lengthX: 1,
            lengthY: 1,
            type: "tleft"
      },
      {
            startX: 8,
            startY: 9,
            lengthX: 6,
            lengthY: 1,
            type: "floor"
      },
      {
            startX: -4,
            startY: 8,
            lengthX: 5,
            lengthY: 1,
            type: "floor"
      },
      {
            startX: 14,
            startY: 11,
            lengthX: 20,
            lengthY: 1,
            type: "floor"
      },
      {
            startX: -5,
            startY: 1,
            lengthX: 1,
            lengthY: 40,
            type: "wright"
      },
      {
            startX: 14,
            startY: 1,
            lengthX: 1,
            lengthY: 10,
            type: "wleft"
      },
      {
            startX: 33,
            startY: 11,
            lengthX: 1,
            lengthY: 16,
            type: "wleft"
      },
      {
            startX: 29,
            startY: 14,
            lengthX: 1,
            lengthY: 6,
            type: "wright"
      },
      {
            startX: 20,
            startY: 20,
            lengthX: 10,
            lengthY: 1,
            type: "floor"
      },
      {
            startX: 12,
            startY: 23,
            lengthX: 5,
            lengthY: 1,
            type: "floor"
      },
      {
            startX: -3,
            startY: 24,
            lengthX: 5,
            lengthY: 1,
            type: "floor"
      },
      {
            startX: 23,
            startY: 26,
            lengthX: 5,
            lengthY: 1,
            type: "floor"
      },
      {
            startX: 33,   //1st platform
            startY: 27,
            lengthX: 11,
            lengthY: 1,
            type: "floor"
      },
      {
            startX: 34,   // bottom platform
            startY: 19,
            lengthX: 57,
            lengthY: 1,
            type: "floor"
      },
      {
            startX: 55,   //2nd platform
            startY: 27,
            lengthX: 5,
            lengthY: 1,
            type: "floor"
      },
      {
            startX: 73,   //3nd platform
            startY: 27,
            lengthX: 3,
            lengthY: 1,
            type: "floor"
      },
      {
            startX: 87,   //4nd platform
            startY: 27,
            lengthX: 1,
            lengthY: 1,
            type: "floor"
      },
      {
            startX: 90,   //wall platform
            startY: 20,
            lengthX: 1,
            lengthY: 7,
            type: "wleft"
      },
      {
            startX: 90,   //end #1 platform
            startY: 27,
            lengthX: 3,
            lengthY: 1,
            type: "floor"
      },
      {
            startX: 95,   //end #2 platform
            startY: 27,
            lengthX: 3,
            lengthY: 1,
            type: "floor"
      },
      {
            startX: 81,   //#2 bottom platform
            startY: 15,
            lengthX: 17,
            lengthY: 1,
            type: "floor"
      },
      {
            startX: 97,   //wall platform
            startY: 15,
            lengthX: 1,
            lengthY: 21,
            type: "wleft"
      },
      {
            startX: 90,   //wall block platform
            startY: 18,
            lengthX: 1,
            lengthY: 1,
            type: "wright"
      },
      {
            startX: 81,   //slide platform
            startY: 17,
            lengthX: 10,
            lengthY: 1,
            type: "floor"
      },
      {
            startX: -5,   //ceiling #1
            startY: 40,
            lengthX: 39,
            lengthY: 1,
            type: "floor"
      },
      {
            startX: 33,   //wall
            startY: 33,
            lengthX: 1,
            lengthY: 7,
            type: "wleft"
      },
      {
            startX: 34,   //ceiling #2
            startY: 36,
            lengthX: 64,
            lengthY: 1,
            type: "floor"
      }],
      boxes: [{
            x: 1,
            y: 1
      }],
      corpses: [{
            x: 6,
            y: 1,
            type: "duck"
      },
      {
            x: 3.25,
            y: 5,
            type: "duck"
      },
      {
            x: 2.5,
            y: 5,
            type: "duck"
      },
      {
            x: 4.5,
            y: 5,
            type: "duck",
            facing: "l"
      },
      {
            x: 2.75,
            y: 6,
            type: "duck"
      },
      {
            x: 2.5,
            y: 3,
            type: "chomper"
            ,
            facing: "l"
      },
      {
            x: 2.6,
            y: 9,
            type: "duck"
      },
      {
            x: 8.5,
            y: 5,
            type: "chomper"
      },
      {
            x: 8.7,
            y: 7,
            type: "duck",
            facing: "l"
      },
      {
            x: 7,
            y: 6,
            type: "duck"
      },
      {
            x: 8,
            y: 9,
            type: "duck"
      },
      {
            x: 8.2,
            y: 10,
            type: "duck",
            facing: "l"
      },
      {
            x: 5,
            y: 5,
            type: "duck"
      },
      {
            x: 6,
            y: 6,
            type: "duck"
      },
      {
            x: 2.4,
            y: 11,
            type: "duck"
      },
      {
            x: 2.6,
            y: 30,
            type: "duck"
      },
      {
            x: 2.9,
            y: 30,
            type: "duck"
      },
      {
            x: 5.3,
            y: 30,
            type: "chomper"
      },
      {
            x: -2.3,
            y: 30,
            type: "chomper"
      },
      {
            x: -4,
            y: 30,
            type: "duck"
      },
      {
            x: 5.3,
            y: 30,
            type: "duck"
      },
      {
            x: 11,
            y: 30,
            type: "chomper"
      },
      {
            x: 12,
            y: 38,
            type: "duck"
      },
      {
            x: 12,
            y: 39,
            type: "hopper"
      }
            ,
      {
            x: -3,
            y: 15,
            type: "hopper",
            facing: "l"
      },
      {
            x: 26,
            y: 18,
            type: "hopper",
            facing: "r"
      },
      {
            x: 26,
            y: 19,
            type: "hopper",
            facing: "l"
      },
      {
            x: 26,
            y: 20,
            type: "hopper",
            facing: "l"
      }
      ],
      traps: [
            {
                  x: 95,
                  y: 20,
                  type: "lsaw"
            }
            ,{
                  x: 91,
                  y: 20,
                  type: "saw"
            }
            ,{
                  x: 95,
                  y: 23,
                  type: "lsaw"
            }
            ,{
                  x: 91,
                  y: 23,
                  type: "saw"
            }
            ,{
                  x: 95,
                  y: 26,
                  type: "lsaw"
            }
            ,{
                  x: 91,
                  y: 26,
                  type: "saw"
            }
            ,{
                  x: 85,
                  y: 27,
                  type: "saw"
            }
            ,{
                  x: 88,
                  y: 27,
                  type: "saw"
            }
            ,{
                  x: 76,
                  y: 27,
                  type: "saw"
            }
            ,{
                  x: 60,
                  y: 27,
                  type: "saw"
            }
            ,{
                  x: 71,
                  y: 27,
                  type: "saw"
            }
            ,{
                x: 44,
                y: 27,
                type: "saw"
            }
            ,{
                  x: 53,
                  y: 27,
                  type: "saw"
            }
            ,{
                  x: -3.3,
                  y: 16,
                  type: "saw"
            },
            {
                  x: 31,
                  y: 27,
                  type: "lsaw"
            },
            {
                  x: -10,
                  y: 13,
                  type: "bigSaw"
            }//,
            //{
            //      x: -10,
            //      y: 7,
            //      type: "spike"
            //}
      ],
      chompers: [
            { x: 15, y: 15 }
      ],
      hoppers: [
            { x: 11, y: 5 },
            { x: 40, y: 25  },
            { x: 50, y: 25  },
            { x: 60, y: 25  },
            { x: 70, y: 25  },
            { x: 80, y: 25  },
            { x: 85, y: 25  },
            { x: 87, y: 25  }
      ],
      buttons: [{ x: -3, y: 24.3 }],
      textboxes: [{
            x: 0, y: 16
      },
      {
            x: 16, y: 16
      }
      ],
      spawns: [
            {x: -2, y: 7},
            {x: 25, y: 19},
            {x: 34, y: 35}
      ]

};
