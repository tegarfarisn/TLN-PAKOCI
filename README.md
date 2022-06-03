# How To Deploy Our Application



Software DEployment mencakup semua langkah, proses, dan aktivitas yang diperlukan untuk membangun software atau update available bagi pengguna yang dituju. Saat ini, sebagian besar organisasi IT dan software developer menerapkan pembaruan Software, patch, dan aplikasi baru dengan kombinasi proses manual dan otomatis. Beberapa aktivitas yang paling umum dari deployment software yaitu perislisan software, instalasi, pengujian, deployment, dan monitoring.

## Why is Software Deployment Important?

Software Deployment adalah salah satu aspek terpenting dari proses pengembangan perangkat lunak. Deployment adalah mekanisme di mana aplikasi, modul, pembaruan, dan patch dikirimkan dari pengembang ke pengguna. Metode yang digunakan oleh pengembang untuk membangun, menguji, dan menyebarkan kode baru akan memengaruhi seberapa cepat suatu produk dapat merespons perubahan preferensi atau persyaratan pelanggan dan kualitas setiap perubahan. 

Tim developer menyederhanakan proses pengembangan, pengujian, dan penerapan kode baru untuk merespons permintaan pelanggan dengan lebih cepat dengan pembaruan baru dan memberikan fitur baru lebih sering untuk mendorong kepuasan pelanggan, memenuhi kebutuhan pengguna, dan memanfaatkan peluang ekonomi. Software deployment mengacu pada proses membuat aplikasi bekerja pada perangkat target, dan perangkat dari target kami adalah komputer.

## Software Deployment Methodologies

DevOps adalah metodologi dan serangkaian praktik terbaik untuk pengembangan perangkat lunak yang tujuan utamanya adalah mempersingkat waktu pengiriman untuk pembaruan perangkat lunak baru sambil mempertahankan kualitas tinggi. Adapun tujuan dari penerapan metodologi ini adalah sebagai berikut.

- Fast Development Methodologies
- Fast Quality Assurance Methodologies
- Fast Deployment Methodologies
- Faster time to market
- Iteration & Continuous Feedback (komunikasi yang kuat dan berkelanjutan antara stakeholder — end user dan customers, product owner, development, quality assurance, dan product engineers)

## The steps of DevOps

### 1) Continuous Development
Fase ini melibatkan perencanaan dan implementasi coding pada software. Visi proyek diputuskan selama fase perencanaan. Dan para developer mulai mengembangkan code untuk aplikasi tersebut.

### 2) Continuous Integration
Tahap ini adalah inti dari seluruh DevOps life cycle. Hal ini merupakan praktik software development di mana deveolper perlu melakukan perubahan pada source code secara berkalla. Hal tersebut mungkin dapat dilakukan setiap hari atau setiap minggu. Kemudian setiap create commit memungkinkan deteksi dini masalah jika ada. Melakukan coding tidak hanya melibatkan kompilasi, tetapi juga mencakup unit testing, integration testing, code review, dan packaging.

Kode yang mendukung fungsionalitas baru terus terintegrasi dengan kode yang ada. Oleh karena itu, ada pengembangan perangkat lunak yang berkelanjutan. Kode yang diperbarui perlu diintegrasikan secara terus menerus dan menyelaraskan dengan sistem untuk mencerminkan perubahan pada end-user.

### 3) Continuous Testing
Fase ini merupakan fase di mana perangkat lunak yang dikembangkan terus dilakukan testing terhadap bugs. Untuk pengujian konstan, alat pengujian otomatisasi seperti TestNG, JUnit, Selenium, dll digunakan. Alat-alat ini memungkinkan QA untuk menguji beberapa basis kode secara menyeluruh secara paralel untuk memastikan bahwa tidak ada kekurangan dalam fungsionalitasnya. Pada fase ini, Docker Containers dapat digunakan untuk mensimulasikan lingkungan pengujian.

Pengujian otomatisasi dapat menghemat banyak waktu dan tenaga dalam menjalankan pengujian daripada melakukannya secara manual. Selain itu, pembuatan laporan merupakan nilai tambah yang besar. Tugas mengevaluasi kasus uji yang gagal dalam rangkaian uji menjadi lebih sederhana. Selain itu juga dapat menjadwalkan eksekusi kasus uji pada waktu yang telah ditentukan. Setelah pengujian, kode tersebut terus menerus terintegrasi dengan kode yang ada.|

### 4) Continuous Monitoring
Monitoring adalah fase yang melibatkan semua faktor operasional dari seluruh proses DevOps, di mana informasi penting tentang penggunaan perangkat lunak dicatat dan diproses dengan cermat untuk mengetahui tren dan mengidentifikasi area masalah. Biasanya, pemantauan terintegrasi dalam kemampuan operasional aplikasi perangkat lunak.

Dalam monitoring pencatatan mungkin dibuat dalam bentuk file dokumentasi atau mungkin menghasilkan data skala besar tentang parameter aplikasi ketika dalam posisi penggunaan terus menerus. Kesalahan sistem seperti server tidak dapat dijangkau, memori rendah, dll diselesaikan dalam fase ini. Ini menjaga keamanan dan ketersediaan layanan.

### 5) Continuous Feedback
Pengembangan aplikasi secara konsisten ditingkatkan dengan menganalisis hasil dari operasi perangkat lunak. Hal ini dilakukan dengan menempatkan fase kritis feedback konstan antara operasi dan pengembangan versi berikutnya dari aplikasi perangkat lunak saat ini. Kontinuitas adalah faktor penting dalam DevOps karena menghapus langkah-langkah yang tidak perlu yang diperlukan untuk mengambil aplikasi perangkat lunak dari pengembangan, menggunakannya untuk mengetahui masalahnya dan kemudian menghasilkan versi yang lebih baik. Hal ini dapat membunuh efisiensi yang mungkin dilakukan dengan aplikasi dan mengurangi jumlah pelanggan yang tertarik.

### 6) Continuous Deployment
![logo](https://static.javatpoint.com/tutorial/devops/images/devops-tutorial-9.png)

Pada fase ini, source code dideploy ke server produksi. Penting untuk memastikan bahwa source code digunakan dengan benar di semua server. Kode baru disebarkan terus menerus, dan management configuration tool memainkan peran penting dalam menjalankan tugas secara berkala dan cepat. Berikut adalah beberapa alat populer yang digunakan dalam fase ini, seperti Chef, Puppet, Ansible, dan SaltStack.

Containerization tool juga memainkan peran penting dalam fase deployment. Vagrant dan Docker adalah tool populer yang digunakan untuk tujuan ini. Tools ini membantu menghasilkan konsistensi di seluruh lingkungan pengembangan, pementasan, pengujian, dan produksi. Mereka juga membantu dalam meningkatkan dan mengurangi instans dengan lembut.

Tool containerization membantu menjaga konsistensi di seluruh lingkungan tempat aplikasi diuji, dikembangkan, dan diterapkan. Tidak ada kemungkinan kesalahan atau kegagalan dalam lingkungan produksi karena mereka mengemas dan mereplikasi dependensi dan paket yang sama yang digunakan dalam lingkungan pengujian, pengembangan, dan staging. Itu membuat aplikasi mudah dijalankan di komputer yang berbeda.

### 6) Continuous Operations
Semua operasi DevOps didasarkan pada kontinuitas dengan otomatisasi lengkap dari proses rilis dan memungkinkan organisasi untuk mempercepat deployement secara berkelanjutan. Jelas dari penjelasan diatas bahwa kontinuitas adalah faktor penting dalam DevOps dalam menghilangkan langkah-langkah yang sering mengganggu pengembangan, membutuhkan waktu lebih lama untuk mendeteksi masalah, dan menghasilkan versi produk yang lebih baik setelah beberapa bulan.


