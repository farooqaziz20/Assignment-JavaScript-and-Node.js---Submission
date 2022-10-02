make_album("Abida parveen", "Mastaana")
make_album("Bob Marley", "No woman, no cry")
make_album("Atif Aslam", "Kuch is trah", 8)

function make_album(name, title, tracks = 0) {
    var obj = {
        artist_name: name,
        title: title,
        tracks: tracks
    }
    console.log(obj)
}