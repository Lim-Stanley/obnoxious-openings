import enPassantSound from './Piece Sounds/En passant.mp3'

import clarinetC1 from './Piece Sounds/clarinet/clarinet_C4.mp3'
import clarinetD from './Piece Sounds/clarinet/clarinet_D4.mp3'
import clarinetE from './Piece Sounds/clarinet/clarinet_E4.mp3'
import clarinetF from './Piece Sounds/clarinet/clarinet_F4.mp3'
import clarinetG from './Piece Sounds/clarinet/clarinet_G4.mp3'
import clarinetA from './Piece Sounds/clarinet/clarinet_A4.mp3'
import clarinetB from './Piece Sounds/clarinet/clarinet_B4.mp3'
import clarinetC2 from './Piece Sounds/clarinet/clarinet_C5.mp3'

import fluteC1 from './Piece Sounds/flute/flute_C5.mp3'
import fluteD from './Piece Sounds/flute/flute_D5.mp3'
import fluteE from './Piece Sounds/flute/flute_E5.mp3'
import fluteF from './Piece Sounds/flute/flute_F5.mp3'
import fluteG from './Piece Sounds/flute/flute_G5.mp3'
import fluteA from './Piece Sounds/flute/flute_A5.mp3'
import fluteB from './Piece Sounds/flute/flute_B5.mp3'
import fluteC2 from './Piece Sounds/flute/flute_C6.mp3'

import tromboneC1 from './Piece Sounds/trombone/trombone_C3.mp3'
import tromboneD from './Piece Sounds/trombone/trombone_D3.mp3'
import tromboneE from './Piece Sounds/trombone/trombone_E3.mp3'
import tromboneF from './Piece Sounds/trombone/trombone_F3.mp3'
import tromboneG from './Piece Sounds/trombone/trombone_G3.mp3'
import tromboneA from './Piece Sounds/trombone/trombone_A3.mp3'
import tromboneB from './Piece Sounds/trombone/trombone_B3.mp3'
import tromboneC2 from './Piece Sounds/trombone/trombone_C4.mp3'

import trumpetC1 from './Piece Sounds/trumpet/trumpet_C4.mp3'
import trumpetD from './Piece Sounds/trumpet/trumpet_D4.mp3'
import trumpetE from './Piece Sounds/trumpet/trumpet_E4.mp3'
import trumpetF from './Piece Sounds/trumpet/trumpet_F4.mp3'
import trumpetG from './Piece Sounds/trumpet/trumpet_G4.mp3'
import trumpetA from './Piece Sounds/trumpet/trumpet_A4.mp3'
import trumpetB from './Piece Sounds/trumpet/trumpet_B4.mp3'
import trumpetC2 from './Piece Sounds/trumpet/trumpet_C5.mp3'

import tubaC1 from './Piece Sounds/tuba/tuba_C2.mp3'
import tubaD from './Piece Sounds/tuba/tuba_D2.mp3'
import tubaE from './Piece Sounds/tuba/tuba_E2.mp3'
import tubaF from './Piece Sounds/tuba/tuba_F2.mp3'
import tubaG from './Piece Sounds/tuba/tuba_G2.mp3'
import tubaA from './Piece Sounds/tuba/tuba_A2.mp3'
import tubaB from './Piece Sounds/tuba/tuba_B2.mp3'
import tubaC2 from './Piece Sounds/tuba/tuba_C3.mp3'

import violinC1 from './Piece Sounds/violin/violin_C5.mp3'
import violinD from './Piece Sounds/violin/violin_D5.mp3'
import violinE from './Piece Sounds/violin/violin_E5.mp3'
import violinF from './Piece Sounds/violin/violin_F5.mp3'
import violinG from './Piece Sounds/violin/violin_G5.mp3'
import violinA from './Piece Sounds/violin/violin_A5.mp3'
import violinB from './Piece Sounds/violin/violin_B5.mp3'
import violinC2 from './Piece Sounds/violin/violin_C6.mp3'

export const audioFileList = [
    {code: "P", row: "1", audio: violinC1},
    {code: "P", row: "2", audio: violinD},
    {code: "P", row: "3", audio: violinE},
    {code: "P", row: "4", audio: violinF},
    {code: "P", row: "5", audio: violinG},
    {code: "P", row: "6", audio: violinA},
    {code: "P", row: "7", audio: violinB},
    {code: "P", row: "8", audio: violinC2},
    {code: "R", row: "1", audio: tromboneC1},
    {code: "R", row: "2", audio: tromboneD},
    {code: "R", row: "3", audio: tromboneE},
    {code: "R", row: "4", audio: tromboneF},
    {code: "R", row: "5", audio: tromboneG},
    {code: "R", row: "6", audio: tromboneA},
    {code: "R", row: "7", audio: tromboneB},
    {code: "R", row: "8", audio: tromboneC2},
    {code: "N", row: "1", audio: clarinetC1},
    {code: "N", row: "2", audio: clarinetD},
    {code: "N", row: "3", audio: clarinetE},
    {code: "N", row: "4", audio: clarinetF},
    {code: "N", row: "5", audio: clarinetG},
    {code: "N", row: "6", audio: clarinetA},
    {code: "N", row: "7", audio: clarinetB},
    {code: "N", row: "8", audio: clarinetC2},
    {code: "B", row: "1", audio: fluteC1},
    {code: "B", row: "2", audio: fluteD},
    {code: "B", row: "3", audio: fluteE},
    {code: "B", row: "4", audio: fluteF},
    {code: "B", row: "5", audio: fluteG},
    {code: "B", row: "6", audio: fluteA},
    {code: "B", row: "7", audio: fluteB},
    {code: "B", row: "8", audio: fluteC2},
    {code: "Q", row: "1", audio: trumpetC1},
    {code: "Q", row: "2", audio: trumpetD},
    {code: "Q", row: "3", audio: trumpetE},
    {code: "Q", row: "4", audio: trumpetF},
    {code: "Q", row: "5", audio: trumpetG},
    {code: "Q", row: "6", audio: trumpetA},
    {code: "Q", row: "7", audio: trumpetB},
    {code: "Q", row: "8", audio: trumpetC2},
    {code: "K", row: "1", audio: tubaC1},
    {code: "K", row: "2", audio: tubaD},
    {code: "K", row: "3", audio: tubaE},
    {code: "K", row: "4", audio: tubaF},
    {code: "K", row: "5", audio: tubaG},
    {code: "K", row: "6", audio: tubaA},
    {code: "K", row: "7", audio: tubaB},
    {code: "K", row: "8", audio: tubaC2},
    {code: "Pe", row: "6", audio: enPassantSound},
    {code: "Pe", row: "3", audio: enPassantSound},
    {code: "o", row: "1", audio: tubaC1},
    {code: "oo", row: "1", audio: tubaC1},
    {code: "o", row: "8", audio: tubaC2},
    {code: "oo", row: "8", audio: tubaC2},
]