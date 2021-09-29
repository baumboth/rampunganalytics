<div class="card mb-4">
    <div class="card-header">
        <button type="button" id="btn-tambah-kategori" class="btn btn-primary"><span class="text"><i class="fas fa-car fa-sm"></i> Tambah Kategori</span></button>
    </div>
    <div class="card-body">
        <div class="card-columns">
            <?php         
            // include database
            include '../config/database.php';
            // perintah sql untuk menampilkan daftar kategori
            $sql="select * from kategori";
            $hasil=mysqli_query($kon,$sql);
            $no=0;
            //Menampilkan data dengan perulangan while
            while ($data = mysqli_fetch_array($hasil)):
            $no++;
            ?>
            <div class="card bg-basic" style="width: 12rem;">
            <a href="index.php?halaman=artikel&kategori=<?php echo $data['id_kategori'];?>"><img class="card-img-top" src="artikel/gambar_kategori/<?php echo $data['gambar_kategori'];?>" alt="Card image cap"></a>
                <div class="card-body text-center">
                <a href="index.php?halaman=artikel&kategori=<?php echo $data['id_kategori'];?>"><h5 class="card-title"><?php echo $data['nama_kategori'];?></h5></a>
                <a href="#" class="hapus_kategori" id_kategori="<?php echo $data['id_kategori']; ?>" gambar="<?php echo $data['gambar_kategori']; ?>"><h6 class="text-danger">Hapus</h6></a>
                </div>
            </div>
            <?php endwhile; ?>
        </div>
    </div>
</div>