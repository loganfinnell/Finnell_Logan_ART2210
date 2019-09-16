function setup() {
   createCanvas(1920, 1080)
   
   }


   function draw() {
      
      // translates moves the shape, but if using 3d space the shape will jump in position


 
      fill('#147AD2');
      strokeWeight(4);
      stroke('#931DC5');
   background('#000000');
   beginShape();
   vertex(703, 204);
   vertex(728, 170);
   vertex(765, 148);
   vertex(822, 136);
   vertex(861, 141);
   vertex(899, 138);
   vertex(923, 157);
   vertex(960, 180);
   vertex(1000, 206);
   vertex(1014, 238);
   vertex(1035, 269);
   vertex(1040, 300);
   vertex(1047, 320);
   vertex(1042, 342);
   vertex(1059, 391);
   vertex(1009, 368);
   vertex(940, 321);
   vertex(897, 271);
   vertex(855, 269);
   vertex(805, 250);
   vertex(788, 243);
   vertex(738, 227);
   vertex(714, 218);
   endShape(CLOSE);
//hair outline
strokeWeight(2);
      fill('#4823E6');
      beginShape();
      vertex(866, 263);
      vertex(946, 263);
      vertex(1005, 284);
      vertex(1015, 309);
      vertex(1042, 342);
      vertex(1059, 391);
      vertex(1009, 368);
      vertex(940, 321);
      vertex(897, 271);
      vertex(855, 269);
      endShape();

      fill('#4823E6');
      beginShape();
      vertex(703, 204);
      vertex(728, 170);
      vertex(765, 148);
      vertex(822, 136);
      vertex(861, 141);
      vertex(899, 138);
      vertex(923, 157);
      vertex(887, 160);
      vertex(865, 154);
      vertex(797, 158);
      vertex(762, 180);
      endShape(CLOSE);


      noFill();
      beginShape();
      vertex(711, 213);
      vertex(745, 201);
      vertex(781, 177);
      vertex(807, 172);
      endShape();

      noFill();
      beginShape();
      vertex(714, 218);
      vertex(757, 210);
      vertex(793, 192);
      vertex(859, 176);
      vertex(943, 180);
      endShape();


      noFill();
      beginShape();
      strokeJoin(ROUND)
      vertex(1037, 284);
      vertex(1002, 263);
      vertex(966, 263);
      vertex(916, 254);
      endShape();

      fill('#4823E6');
      strokeJoin(ROUND)
      beginShape();
      vertex(906, 222);
      vertex(929, 229);
      vertex(973, 229);
      vertex(1008, 241);
      vertex(1017, 242);
      vertex(1008, 225);
      vertex(976, 206);
      vertex(955, 208);
      vertex(925, 204);
      vertex(902, 210);
      vertex(875, 210);
      vertex(845, 218);
      vertex(813, 241);
      endShape();
      stroke('#931DC5');
  //head hair top done


fill('#4823E6');
      strokeWeight(4);
      strokeJoin(ROUND)
   beginShape();
   vertex(709, 212);
   vertex(714, 218);
   vertex(753, 232);
   vertex(733, 235);
   vertex(707, 260);
   vertex(687, 300);
   vertex(675, 387);
   vertex(668, 342);
   vertex(668, 280);
   vertex(686, 236);
   endShape(CLOSE);
   stroke('#931DC5');

   fill('#147AD2');
   strokeJoin(ROUND)
   strokeWeight(2);
   beginShape();
   vertex(753, 232);
   vertex(733, 235);
   vertex(707, 260);
   vertex(687, 300);
   vertex(675, 387);
   vertex(684, 439);
   vertex(684, 442);
   vertex(692, 437);
   vertex(721, 434);
   vertex(721, 396);
   vertex(729, 384);
   vertex(743, 381);
   vertex(721, 342);
   vertex(721, 311);
   vertex(736, 269);
   vertex(753, 258);
   vertex(780, 265);
   vertex(768, 246);
   vertex(798, 247);
   vertex(788, 243);
   endShape(CLOSE);

   fill('#FFFFFF');
   strokeJoin(ROUND)
   strokeWeight(6);
   stroke('#000000');
   beginShape();
   vertex(1084, 457);
   vertex(1084, 450);
   vertex(1077, 437);
   vertex(1028, 444);
   vertex(1028, 453);
   vertex(1058, 457);
   // glassesrightsidebar
   endShape(CLOSE);

   fill('#FFFFFF');
   strokeJoin(ROUND)
   strokeWeight(0);
   beginShape();
   vertex(684, 442);
   vertex(692, 437);
   vertex(721, 434);
   vertex(768, 428);
   vertex(831, 422);
   vertex(892, 427);
   vertex(935, 436);
   vertex(959, 436);
   vertex(993, 425);
   vertex(1039, 421);
   vertex(1088, 426);
   vertex(1096, 432);
   vertex(1095, 455);
   vertex(1089, 462);
   vertex(1088, 470);
   vertex(1084, 473);
   vertex(1084, 450);
   vertex(1077, 437);
   vertex(1061, 430);
   vertex(1029, 428);
   vertex(992, 432);
   vertex(971, 442);
   vertex(963, 450);
   vertex(965, 476);
   vertex(960, 478);
   vertex(957, 470);
   vertex(949, 457);
   vertex(939, 456);
   vertex(930, 462);
   vertex(920, 478);
   vertex(920, 449);
   vertex(911, 439);
   vertex(888, 432);
   vertex(830, 429);
   vertex(794, 434);
   vertex(782, 441);
   vertex(776, 456);
   vertex(776, 476);
   vertex(767, 476);
   vertex(765, 466);
   vertex(755, 460);
   vertex(708, 458);
   vertex(684, 451);
   endShape(CLOSE);

   noFill();
   strokeJoin(ROUND)
   strokeWeight(1);
   stroke('#FFFFFF');
   beginShape();
   vertex(767, 476);
   vertex(771, 494);
   vertex(779, 511);
   // glassesleftlense
   endShape();

   noFill();
   strokeJoin(ROUND)
   strokeWeight(1);
   stroke('#FFFFFF');
   beginShape();
   vertex(776, 476);
   vertex(779, 495);
   vertex(789, 512);
   vertex(813, 523);
   vertex(853, 526);
   vertex(890, 521);
   vertex(906, 506);
   vertex(920, 478);
   vertex(925, 460);
   // glassesleftlense
   endShape();

   noFill();
   strokeJoin(ROUND)
   strokeWeight(1);
   stroke('#FFFFFF');
   beginShape();
   vertex(997, 513);
   vertex(1024, 516);
   vertex(1051, 510);
   vertex(1070, 504);
   vertex(1081, 489);
   vertex(1084, 473);
   vertex(1088, 470);
   vertex(1086, 489);
   vertex(1080, 502);
   vertex(1071, 511);
   vertex(1055, 517);
   vertex(1028, 521);
   // glassesrightlense
   endShape();

   noFill();
   strokeJoin(ROUND)
   strokeWeight(1);
   stroke('#FFFFFF');
   beginShape();
   vertex(965, 476);
   vertex(967, 492);
   vertex(975, 507);
   // glassesrightlense
   endShape();
   }
   

