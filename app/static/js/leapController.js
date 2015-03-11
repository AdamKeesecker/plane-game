/* global Leap */
'use strict';

Leap.loop({
  frame: function(frame){
    var iBox = frame.interactionBox,
        leapPoint,
        normalizedPoint;
    // console.log('ibox', iBox);
    if(frame.hands[0]){
      var hand = frame.hands[0];
      console.log(hand);
      leapPoint = hand.stabilizedPalmPosition;
      normalizedPoint = iBox.normalizePoint(leapPoint, true);
      // palmX = Math.floor(normalizedPoint[0] * appWidth);
      // palmY = Math.floor((1 - normalizedPoint[1]) * appHeight);
      // console.log(palmX, palmY);
    }
  }
    // hand: function(hand){
    // }
});


  /*
      var hand = frame.hands[0],
          fingers = hand.fingers.filter(function(f){
            return f.type === 1 || f.type === 2 || f.type === 3;
          });
      console.log(hand.stabilizedPalmPosition);
      fingers.forEach(function(f){
        switch(f.type){
          case 1:
            leapPoint = f.tipPosition;
            normalizedPoint = iBox.normalizePoint(leapPoint, true);
            indexX = normalizedPoint[0] * appWidth;
            indexY = (1 - normalizedPoint[1]) * appHeight;
            break;
          case 2:
            leapPoint = f.tipPosition;
            normalizedPoint = iBox.normalizePoint(leapPoint, true);
            middleX = normalizedPoint[0] * appWidth;
            middleY = (1 - normalizedPoint[1]) * appHeight;
            break;
          case 3:
            leapPoint = f.tipPosition;
            normalizedPoint = iBox.normalizePoint(leapPoint, true);
            ringX = normalizedPoint[0] * appWidth;
            ringY = (1 - normalizedPoint[1]) * appHeight;
            break;
        }
      });
    };
    // document.getElementById('leap-output').innerHtml = '';
    */
