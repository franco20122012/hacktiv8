# FIFA ONLINE


# RELEASE 0
Buatlah Class Player dimana class tersebut memiliki attribut playerName, height, position, nationality, transferFee dan currentClub.
Untuk attribute currentClub default value-nya adalah null

# RELEASE 1
Buatlah Class User dimana class tersebut memiliki attribut username, win, lose, server. Default menang / kalahnya 0

# RELEASE 2
Buatlah Class-class Club dimana class-class tersebut memiliki attribute teamName, user, stadium, location, manager, budgetTransfer dan players. Untuk attribute players default value-nya adalah array kosong.

Tentukan relasi dari class-class tersebut(jika ada), apakah relasi-nya merupakan parent-child (inheritance) atau composition

Pada Release ini, kamu harus menyediakan fitur agar suatu club bisa menambah player-nya

# RELEASE 3
Buatlah class-class League dimana class-class tersebut memiliki attribute country, ceo dan clubs. Untuk attribute clubs default value-nya adalah array kosong.

Tentukan relasi dari class-class tersebut(jika ada), apakah relasi-nya merupakan parent-child (inheritance) atau composition

Pada release ini, kamu harus menyediakan fitur:
 1. menambah club pada League tersebut
 2. mencetak list nama club dan nama stadium club yang terdaftar pada League tersebut

# RELEASE 4
Buatlah fitur dimana sebuah Club dapat membeli seorang Player dengan budget yang sudah tersedia.

Requirement:
1. buatlah method buyPlayer yang menyediakan dua parameter, dimana:
   - parameter pertama adalah objek player
   - parameter kedua adalah objek club dimana player tersebut sekarang berada(Jika player belum memiliki club (currentClub = null), maka parameter kedua diisi dengan null)
2. Validasi: apakah currentClub player tersebut sama dengan nama club inputan parameter ke-2
  - Jika iya, maka lanjutkan proses untuk membeli player tersebut (Lanjut No.3)
  - Jika tidak, maka tuliskan: `There is no Player with name [Player_Name] in [Club_Name] F.C.`
3. Validasi: apakah budget pada club cukup untuk membeli player tersebut
  - Jika iya:
    * lanjutkan proses pembelian
    * tambah player tersebut ke dalam list player club
    * Player harus terhapus pada list player previous club
    * Tuliskan: `You buy [Player_Name] with transfer fee $[harga_player], remaining budget: $[sisa_budget]`
  - Jika tidak, maka tuliskan `Budget not sufficient to buy [Player_Name]. Your club need extra money for $[kekurangan_uang] to buy this player`

## NOTED:
- DRIVER CODE TIDAK BOLEH DIUBAH (driver code ada pada file index.js)
- PERHATIKAN DRIVER CODE DENGAN SEKSAMA UNTUK MEMBANTU KAMU DALAM MENGERJAKAN APLIKASI INI


## OPTIONAL:
Jika dalam 1 fila hanya ada 1 class. Berarti jika kamu memiliki 5 class maka akan ada 6 file (5 file class, 1 file index.js)
