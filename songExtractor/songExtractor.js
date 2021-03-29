/* THIS PROJECT IS A WORK IN PROGRESS.
I AM ATTEMPTNG TO MAKE A PROGRAM TO AUTOMATE COPYING PLAYLISTS FROM XRAY.FM
AND FORMATTING THEM TO CONVERT TO A SPOTIFY PLAYLIST.

I DID IT THE BEST WAY I KNOW HOW THIS TIME, BUT I KNOW IT NEEDS IMPROVEMENT.
"ON" IN A SONG TITLE, FOR INSTANCE, IF IT'S NOT CAPITALIZED, WILL THROW THE PROGRAM.
ON THE WEBSITE, THE TITLE, ALBUM, ARTIST, ETC HAVE DIFFERENT IDs, SO NEXT I'LL FIGURE OUT HOW
TO IMPORT THE INFORMATION DIRECTLY FROM THE SITE.
UNTIL THEN, THIS WORKS OKAY! */

const list = `8:14pm The Girl Who Lives On Heaven Hill by Hüsker Dü on New Day Rising (SST)
    8:14pm Plan 9, Channel 7 by The Damned on Machine Gun Ettiquette (Chiswick)
    8:14pm Children of Satan/Third Fig by Ciccone Youth on The Whitey Album (Goofin')
    8:15pm Girls of War by Die Monitr Bats on Girls of War (Troubleman)
    8:15pm Alienation by Poison Girls on Chappaquiddick Bridge (Water Wing)
    8:15pm Six Wave Hold Down by Hot Snakes on Jericho Sirens (Sub Pop)
    8:16pm C'mon Toody by The Rats on In a Desperate Red (Whizeagle Records)
    8:18pm I Live In The Springtime by The Lemon Drops on Pebbles 8 (BFD)
    8:18pm Nicolas by The Calamaties on S/T (Posh Boy)
    8:18pm That's Your Way Put by Pandoras on Stop Pretending (Rhino)
    8:19pm If You Have Ghosts by Roky Erickson on The Evil One (Light in the Attic)     
    4:03pm Sunnyside by Deerhoof on Halfbird (Menlo Park)
    4:07pm Lovers And Other Strangers by Flying Lizards on Fourth Wall (Virgin)
    4:10pm Uncontrollable Urge by DEVO on Are We Not Men? (Warner Bros)
    4:12pm Janitor by Suburban Lawns on Suburban Lawns (Futurismo)
    4:14pm Five Foot One by Iggy Pop on New Values (Arista)
    4:19pm When The Night Comes by Thee Headcoatees on Girlsville (Get Hip)
    4:22pm Jim On The Move by Lizzy Mercier Descloux on Press Color (ZE)
    4:26pm Golden Years by David Bowie on Changes One (RCA)
    4:28pm Save It For Later by The English Beat on What Is Beat? (IRS)
    4:33pm Under The Boardwalk by Tom Tom Club on 12 (Sire)
    4:39pm The Heat Is On by Agnetha Fältskog on 45 (Polydor)
    4:43pm Soul Island by The Meters on The Very Best Of (Rhino)
    4:47pm Take It Easy by Hopeton Lewis on 300% Dynamite (Soul Jazz)
    4:49pm Her Story by Vivien Goldman on Resolutionary (Staubgold)
    4:54pm Komissar - Don't Turn Around by Suzy Andrews on 45 (X)
    4:58pm Pop Music by M on 45 (Sire)
    5:03pm Vacation by Go-Go's on 45 (IRS)
    5:05pm It's Not My Place (In The 9 To 5 World) by Ramones on Pleasant Dreams (Sire)
    5:09pm Son Of A Gun by The Vaselines on Enter The Vaselines (Sub Pop)
    5:12pm Cannonball by The Breeders on Last Splash (4AD)
    5:16pm Untitled #2 by Ty Segall on Lemons (Goner)
    5:19pm Super Crush by Tiger Trap on Tiger Trap (K Records)
    5:23pm Who Loves The Sun by The Velvet Underground on Loaded (Cotillion)
    5:26pm How Ever Much by Françoise Hardy on Maid In Paris (Four Corners)
    5:28pm You Really Got Me by The Kinks on A Compleat Collection (Compleat)
    5:30pm Coulda Been by Sallie Ford on Slap Back (Vanguard)
    5:34pm On Again/Off Again by The Clean on Anthology (Merge)
    5:35pm Precious Alone Time by The Gonks on Five Things You Didn't Know About (Rocks In Your Head Records)
    5:38pm Knock That Door by Enon on Lost Marbles And Exploded Evidence (Touch And Go)
    5:41pm What's A Girl To Do by Cristina on 12 (Island)
    5:45pm La Machine á Rêver by Xray Pop on The Dream Experience (Dark Entries)
    5:48pm Johnny And Mary by Black Marble on Must Be Living Twice (Sacred Bones)
    5:52pm De-Luxe by Lush on Gala (4AD)
    5:55pm Cherry-Coloured Funk by Cocteau Twins on Heaven or Las Vegas (4AD)`;
const listArray = list.split(" ");
const songArray = [];
const artistArray = [];
const startsArray = [];
const midsArray = [];
const endsArray = [];
for (let i = 0; i < listArray.length; i++) {
  if (listArray[i].charAt(1) === `:`) {
    startsArray.push(i);
  } else if (listArray[i] === "by") {
    midsArray.push(i);
  } else if (listArray[i] === "on") {
    endsArray.push(i);
  }
}
for (let j = 0; j < startsArray.length; j++) {
  let start = startsArray[j] + 1;
  let end = midsArray[j];
  let currentSongAry = [];
  currentSongAry = listArray.slice(start, end);
  let currentSong = currentSongAry.join(" ");
  songArray.push(currentSong);
}

for (let k = 0; k < midsArray.length; k++) {
  let start = midsArray[k] + 1;
  let end = endsArray[k];
  let currentArtistAry = [];
  currentArtistAry = listArray.slice(start, end);
  let currentArtist = currentArtistAry.join(" ");
  artistArray.push(currentArtist);
}
for (let l = 0; l < artistArray.length; l++) {
  console.log(artistArray[l] + " - " + songArray[l]);
}
