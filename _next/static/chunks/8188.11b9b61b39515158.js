"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8188],{28188:function(e){e.exports=JSON.parse('{"commands":{"MOTION_MOVESTEPS":"liigu %1 punkti","MOTION_TURNRIGHT":"p\xf6\xf6ra @turnRight %1 kraadi","MOTION_TURNLEFT":"p\xf6\xf6ra @turnLeft %1 kraadi","MOTION_POINTINDIRECTION":"osuta suunas %1","MOTION_POINTTOWARDS":"osuta %1-le","MOTION_GOTOXY":"mine x: %1 y: %2","MOTION_GOTO":"mine %1","MOTION_GLIDESECSTOXY":"liugle %1 sekundiga x: %2 y: %3","MOTION_GLIDETO":"liugle %1 sekundiga %2","MOTION_CHANGEXBY":"muuda x %1 v\xf5rra","MOTION_SETX":"v\xf5ta x %1","MOTION_CHANGEYBY":"muuda y %1 v\xf5rra","MOTION_SETY":"v\xf5ta y %1","MOTION_SETROTATIONSTYLE":"m\xe4\xe4ra p\xf6\xf6ramisstiil %1","LOOKS_SAYFORSECS":"\xfctle %1 %2 sek","LOOKS_SAY":"\xfctle %1","LOOKS_THINKFORSECS":"m\xf5tle %1 %2 sek","LOOKS_THINK":"m\xf5tle %1","LOOKS_SHOW":"n\xe4ita","LOOKS_HIDE":"peida","LOOKS_SWITCHCOSTUMETO":"v\xf5ta kost\xfc\xfcm %1","LOOKS_NEXTCOSTUME":"j\xe4rgmine kost\xfc\xfcm","LOOKS_NEXTBACKDROP_BLOCK":"j\xe4rgmine taust","LOOKS_SWITCHBACKDROPTO":"v\xf5ta taust %1","LOOKS_SWITCHBACKDROPTOANDWAIT":"v\xf5ta taust %1 ja oota","LOOKS_CHANGEEFFECTBY":"muuda efekti %1 %2 v\xf5rra","LOOKS_SETEFFECTTO":"pane %1 efekt %2","LOOKS_CLEARGRAPHICEFFECTS":"t\xfchista graafikaefektid","LOOKS_CHANGESIZEBY":"muuda suurust %1 v\xf5rra","LOOKS_SETSIZETO":"v\xf5ta suuruseks %1 %","LOOKS_GOTOFRONTBACK":"mine kihile %1","LOOKS_GOFORWARDBACKWARDLAYERS":"mine %1 %2 kihti","SOUND_PLAY":"alusta heli %1","SOUND_CHANGEEFFECTBY":"muuda efekti %1 %2 v\xf5rra","SOUND_SETEFFECTO":"pane %1 efekt %2","SOUND_CLEAREFFECTS":"vaigista heliefektid","SOUND_PLAYUNTILDONE":"m\xe4ngi heli %1 kuni l\xf5puni","SOUND_STOPALLSOUNDS":"peata k\xf5ik helid","music.playDrumForBeats":"m\xe4ngi trummi %1 kestusega %2","music.restForBeats":"paus %1 l\xf6\xf6ki","music.playNoteForBeats":"m\xe4ngi nooti %1 %2 l\xf6\xf6ki","music.setInstrument":"v\xf5ta instrumendiks %1","SOUND_CHANGEVOLUMEBY":"muuda helitugevust %1 v\xf5rra","SOUND_SETVOLUMETO":"v\xf5ta helitugevuseks %1%","music.changeTempo":"muuda tempot %1 v\xf5rra","music.setTempo":"v\xf5ta tempoks %1","pen.clear":"kustuta k\xf5ik","pen.stamp":"j\xe4ljend","pen.penDown":"pliiats alla","pen.penUp":"pliiats \xfcles","pen.setColor":"v\xf5ta pliiatsi v\xe4rviks %1","pen.changeHue":"muuda pliiatsi v\xe4rvi %1 v\xf5rra","pen.setColorParam":"v\xf5ta pliiatsi %1 %2","pen.changeColorParam":"muuda pliiatsi %1 %2 v\xf5rra","pen.setHue":"v\xf5ta pliiatsi v\xe4rviks %1","pen.changeShade":"muuda pliiatsi varjundit %1 v\xf5rra","pen.setShade":"v\xf5ta pliiatsi varjundiks %1","pen.changeSize":"muuda pliiatsi suurust %1 v\xf5rra","pen.setSize":"v\xf5ta pliiatsi suuruseks %1","EVENT_WHENFLAGCLICKED":"kui kl\xf5psata @greenFlag","EVENT_WHENKEYPRESSED":"kui kl\xf5psata klahvi %1","EVENT_WHENTHISSPRITECLICKED":"kui spraiti kl\xf5psata","EVENT_WHENSTAGECLICKED":"kui lava kl\xf5psata","EVENT_WHENBACKDROPSWITCHESTO":"kui taustaks saab %1","EVENT_WHENGREATERTHAN":"kui %1 > %2","EVENT_WHENBROADCASTRECEIVED":"kui saan teate %1","EVENT_BROADCAST":"teata %1","EVENT_BROADCASTANDWAIT":"teata %1 ja oota","CONTROL_WAIT":"oota %1 sek","CONTROL_REPEAT":"korda %1 korda","CONTROL_FOREVER":"korda l\xf5putult","CONTROL_IF":"kui %1 siis","CONTROL_WAITUNTIL":"oota kuni %1","CONTROL_REPEATUNTIL":"korda kuni %1","CONTROL_STOP":"stopp %1","CONTROL_STARTASCLONE":"kui alustan kloonina","CONTROL_CREATECLONEOF":"klooni %1","CONTROL_DELETETHISCLONE":"eemalda see kloon","SENSING_ASKANDWAIT":"k\xfcsi %1 ja oota","videoSensing.videoToggle":"l\xfclita video %1","videoSensing.setVideoTransparency":"v\xf5ta video l\xe4bipaistvus %1","videoSensing.whenMotionGreaterThan":"kui video liikumine > %1","SENSING_RESETTIMER":"nulli taimer","DATA_SETVARIABLETO":"v\xf5ta %1 = %2","DATA_CHANGEVARIABLEBY":"muuda %1 %2 v\xf5rra","DATA_SHOWVARIABLE":"n\xe4ita muutujat %1","DATA_HIDEVARIABLE":"peida muutuja %1","DATA_ADDTOLIST":"lisa %1 loendisse %2","DATA_DELETEOFLIST":"eemalda %1 loendist %2","DATA_DELETEALLOFLIST":"eemalda k\xf5ik loendist %1","MOTION_IFONEDGEBOUNCE":"kui \xe4\xe4rel, p\xf5rka","DATA_INSERTATLIST":"sisesta %1 kohale %2 loendis %3","DATA_REPLACEITEMOFLIST":"asenda v\xe4\xe4rtus %1 loendis %2 %3 -ga","DATA_SHOWLIST":"n\xe4ita loendit %1","DATA_HIDELIST":"peida loend %1","SENSING_OF_XPOSITION":"x","SENSING_OF_YPOSITION":"y","SENSING_OF_DIRECTION":"suund","SENSING_OF_COSTUMENUMBER":"kost\xfc\xfcmi nr","LOOKS_COSTUMENUMBERNAME":"kost\xfc\xfcmi %1","SENSING_OF_SIZE":"suurus","SENSING_OF_BACKDROPNAME":"tausta nimi","LOOKS_BACKDROPNUMBERNAME":"tausta %1","SENSING_OF_BACKDROPNUMBER":"tausta nr","SOUND_VOLUME":"helitugevus","music.getTempo":"tempo","SENSING_TOUCHINGOBJECT":"puudutab %1?","SENSING_TOUCHINGCOLOR":"puudutab v\xe4rvi %1?","SENSING_COLORISTOUCHINGCOLOR":"v\xe4rv %1 puudutab v\xe4rvi %2?","SENSING_DISTANCETO":"kaugus %1-st","SENSING_ANSWER":"vastus","SENSING_KEYPRESSED":"klahv %1 all?","SENSING_MOUSEDOWN":"hiir all?","SENSING_MOUSEX":"hiire x","SENSING_MOUSEY":"hiire y","SENSING_SETDRAGMODE":"v\xf5ta lohistatavus = %1","SENSING_LOUDNESS":"valjus","videoSensing.videoOn":"%2 video %1","SENSING_TIMER":"taimer","SENSING_OF":"%2 %1","SENSING_CURRENT":"hetke %1","SENSING_DAYSSINCE2000":"p\xe4evi alates 2000","SENSING_USERNAME":"kasutajanimi","OPERATORS_ADD":"%1 + %2","OPERATORS_SUBTRACT":"%1 - %2","OPERATORS_MULTIPLY":"%1 * %2","OPERATORS_DIVIDE":"%1 / %2","OPERATORS_RANDOM":"juhuarv %1 kuni %2","OPERATORS_LT":"%1 < %2","OPERATORS_EQUALS":"%1 = %2","OPERATORS_GT":"%1 > %2","OPERATORS_AND":"%1 ja %2","OPERATORS_OR":"%1 v\xf5i %2","OPERATORS_NOT":"mitte %1","OPERATORS_JOIN":"%1 & %2","OPERATORS_LETTEROF":"m\xe4rk %1 s\xf5nas %2","OPERATORS_LENGTH":"%1 pikkus","OPERATORS_MOD":"%1 mod %2","OPERATORS_ROUND":"\xfcmarda %1","OPERATORS_MATHOP":"%2 %1","OPERATORS_CONTAINS":"%1 sisaldab %2?","DATA_ITEMOFLIST":"%1 loendis %2","DATA_ITEMNUMOFLIST":"%1 jrk nr loendis %2","DATA_LENGTHOFLIST":"%1 pikkus","DATA_LISTCONTAINSITEM":"%1 sisaldab %2?","CONTROL_ELSE":"muidu","SENSING_USERID":"kasutaja ID","SENSING_LOUD":"v\xe4ga vali?","text2speech.speakAndWaitBlock":"\xfctle %1","text2speech.setVoiceBlock":"v\xf5ta h\xe4\xe4leks %1","text2speech.setLanguageBlock":"v\xf5ta keeleks %1","translate.translateBlock":"t\xf5lgi %1 %2 keelde","translate.viewerLanguage":"keel","makeymakey.whenKeyPressed":"when %1 key pressed","makeymakey.whenKeysPressedInOrder":"when %1 pressed in order","microbit.whenButtonPressed":"kui %1 nupp all","microbit.isButtonPressed":"%1 nupp all?","microbit.whenGesture":"kui %1","microbit.displaySymbol":"kuva %1","microbit.displayText":"kuva tekst %1","microbit.clearDisplay":"t\xfchjenda kuva","microbit.whenTilted":"kui kallutatud %1","microbit.isTilted":"kallutatud %1?","microbit.tiltAngle":"kaldenurk %1","microbit.whenPinConnected":"Kui %1 \xfchendas","ev3.motorTurnClockwise":"p\xf6\xf6ra mootor %1 p\xe4rip\xe4eva %2 sek","ev3.motorTurnCounterClockwise":"p\xf6\xf6ra mootor %1 vastup\xe4eva %2 sek","ev3.motorSetPower":"v\xf5ta mootori %1 v\xf5imsus %2 %","ev3.getMotorPosition":"mootori %1 positsioon","ev3.whenButtonPressed":"kui nupp %1 all","ev3.whenDistanceLessThan":"kui kaugus < %1","ev3.whenBrightnessLessThan":"kui heledus < %1","ev3.buttonPressed":"nupp %1 all?","ev3.getDistance":"kaugus","ev3.getBrightness":"heledus","ev3.beepNote":"m\xe4ngi nooti %1 %2 sek","wedo2.motorOn":"l\xfclita %1 sisse","wedo2.motorOff":"l\xfclita %1 v\xe4lja","wedo2.startMotorPower":"v\xf5ta %1 v\xf5imsuseks %2","wedo2.setMotorDirection":"v\xf5ta %1 suunaks %2","wedo2.whenDistance":"kui kaugus %1 %2","wedo2.getDistance":"kaugus","wedo2.motorOnFor":"l\xfclita %1 sisse %2 sek","wedo2.setLightHue":"v\xf5ta LED v\xe4rviks %1","wedo2.playNoteFor":"m\xe4ngi nooti %1 %2 sek","wedo2.whenTilted":"kui kallutatud %1","wedo2.isTilted":"kallutatud %1?","wedo2.getTiltAngle":"kaldenurk %1","gdxfor.whenGesture":"when %1","gdxfor.whenForcePushedOrPulled":"when force sensor %1","gdxfor.getForce":"force","gdxfor.whenTilted":"when tilted %1","gdxfor.isTilted":"tilted %1?","gdxfor.getTilt":"tilt angle %1","gdxfor.isFreeFalling":"falling?","gdxfor.getSpin":"spin speed %1","gdxfor.getAcceleration":"acceleration %1","boost.motorOnFor":"turn motor %1 for %2 seconds","boost.motorOnForRotation":"turn motor %1 for %2 rotations","boost.motorOn":"turn motor %1 on","boost.motorOff":"turn motor %1 off","boost.setMotorPower":"set motor %1 speed to %2 %","boost.setMotorDirection":"set motor %1 direction %2","boost.getMotorPosition":"motor %1 position","boost.whenColor":"when %1 brick seen","boost.seeingColor":"seeing %1 brick?","boost.whenTilted":"when tilted %1","boost.getTiltAngle":"tilt angle %1","boost.setLightHue":"set light color to %1"},"dropdowns":{},"ignorelt":[],"soundEffects":["helik\xf5rgus","heli vasakul/paremal"],"microbitWhen":["liikus","rappus","h\xfcppas"],"osis":["teised spraidi skriptid"],"definePrefix":["defineeri"],"defineSuffix":[],"palette":{"Motion":"Liikumine","Looks":"V\xe4limus","Sound":"Helid","Events":"S\xfcndmused","Control":"Juhtimine","Sensing":"Andurid","Operators":"Tehted","Variables":"Muutujad","My Blocks":"Minu Plokid"},"math":["abs","floor","ceiling","sqrt","sin","cos","tan","asin","acos","atan","ln","log","e ^","10 ^"],"aliases":{},"name":"Eesti","percentTranslated":100}')}}]);