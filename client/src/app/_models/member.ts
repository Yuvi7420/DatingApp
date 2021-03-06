import { Photo } from "./Photo";

export interface Member {
    id:           number;
    username:     string;
    photoUrl:     string;
    age:          number;
    knownAs:      string;
    created:      Date;
    lastActive:   Date;
    gender:       string;
    lookingFor:   string;
    introduction: string;
    interests:    string;
    city:         string;
    country:      string;
    photos:       Photo[];
}


