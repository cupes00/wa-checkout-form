//<![CDATA[
/*
* Wendy Code Checkout Form Whatsapp And Email
* Copyright (c) 2021 https://blog.choipanwendy.com
* No Licensed & Open source Code
* jQuery library
*/
// Tombol Buka Tutup
$('.tombol-bukatutup').click(function(){
$('.wendy-checkout-wrap').fadeToggle()});
 
var input_harga = $('#harga').text(); // Mengambil Harga Produk 
$('.harga-s').text(input_harga);
 
// validasi Untuk Kolom mailjib Isi
$('.wendy-datainput .validate').each(function() {
    title = $(this).attr('name');
    label = $(this).parents('.wendy-datainput');
    $('<span class="wendy-validasi"><b>' + title + '</b> diperlukan</span>').appendTo(label);
});
   $(document).on('keyup', '.wendy-datainput .validate', function() {
    if ($(this).val() != '') {
        $(this).removeClass('focus');
        $(this).parents('.wendy-datainput').find('.wendy-validasi').removeClass('show');
    }
});
$(document).on('change', '.wendy-datainput select', function() {
    $(this).removeClass('focus');
    $(this).parents('.wendy-datainput').find('.wendy-validasi').removeClass('show');
});
$('.send_form').click(checkout);
function checkout() { 
if ($('#namalengkap').val() == '') { // validasi Nama Lengkap
          $('#namalengkap').each(function() {
              $(this).addClass('focus');
                    $(this).parents('.wendy-datainput').find('.wendy-validasi').addClass('show');
          });
        $('#namalengkap').focus();
        return false;
    } else if ($('#nomorWA').val() == '') { // validasi Nomor Hp
          $('#nomorWA').each(function() {
              $(this).addClass('focus');
                    $(this).parents('.wendy-datainput').find('.wendy-validasi').addClass('show');
          });
        $('#nomorWA').focus();
        return false;
    } else if ($('#email').val() == '') { // validasi Alamat Email
          $('#email').each(function() {
              $(this).addClass('focus');
                    $(this).parents('.wendy-datainput').find('.wendy-validasi').addClass('show');
          });
        $('#email').focus();
        return false;
      } else if ($('#pembayaran').val() == 'default') { // validasi Pembayaran
          $('#pembayaran').each(function() {
              $(this).addClass('focus');
                    $(this).parents('.wendy-datainput').find('.wendy-validasi').addClass('show');
          });
        $('#pembayaran').focus();
        return false;
      } else if ($('#alamat').val() == '') { // validasi Alamat
          $('#alamat').each(function() {
              $(this).addClass('focus');
                    $(this).parents('.wendy-datainput').find('.wendy-validasi').addClass('show');
          });
        $('#alamat').focus();
        return false;
    } else {
 
   /* Pengaturan Email */
var email = 'yourmail@gmail.com', //Alamat Email Kalian
    maillink = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=',
    mailsubject = '&subject=Konfirmasi Pembelian ', //Subjek Email Namun Hanya Muncul Di SmartPhone Saja
    maillink1 = '',
    jarak = '',
    maillink2 = '&body=Halo saya ingin membeli produk anda dengan keterangan berikut: ', //Pesan Pembuka di email
    
    /* Pengaturan Whatsapp */ 
    phone = '628131123xxxx', // Nomor Whatsapp Kalian
    walink = 'https://web.whatsapp.com/send', 
    walink2 = 'Halo saya ingin membeli produk anda dengan keterangan berikut:'; // Pesan Pembuka di whatsapp
      
    /* Dukungan Smartphone */ 
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { 
var maillink = 'mailto:',
    jarak ='<br>';
    maillink1 = '?cc=&bcc=',
    walink = 'whatsapp://send';
}  
 
    /* Formulir Input Panggilan */ 
var input_nama = $('#namalengkap').val(), // Mengambil Input Nama
    input_nomor = $('#nomorWA').val(), // Mengambil Input Nomor Hp
    input_email = $('#email').val(), // Mengambil Input Alamat Email
    input_pembayaran = $('#pembayaran :selected').text(), // Mengambil Input Pembayaran
    input_alamat = $('#alamat').val(), // Mengambil Input Alamat
    input_namaproduk = $('#nama_produk').text(), // Mengambil Nama Produk
    input_harga = $('#harga').text(), // Mengambil Harga Produk
    input_catatan = $('#catatan').val(), // Mengambil Catatan Pembeli
    input_viaUrl = location.href; // Mengambil Url Saat ini atau link produk

    /* URL Final Email */ 
var mail_link = maillink + email + maillink1 + mailsubject + input_nama + maillink2 + '%0A%0A' + jarak + jarak +
    'DATA SAYA ' + jarak + 
    '%0A-----------------------------%0A' + '%0A' + jarak + jarak +
    'Nama : ' + input_nama + '%0A' + jarak + 
    'No Hp : ' + input_nomor + '%0A' + jarak +
    'Email : ' + input_email + '%0A' + jarak +
    'Alamat : ' + input_alamat + '%0A' + jarak +
    'Metode Pembayaran : ' + input_pembayaran + '%0A' + jarak +
    '%0A-----------------------------%0A' + '%0A' + jarak + jarak + 
    'DAFTAR DAFTAR BELANJAAN %0A' + jarak +
    '-----------------------------%0A' + jarak +
    'Nama Produk : ' + input_namaproduk + '%0A' + jarak + 
    'Harga Produk : ' + input_harga + '%0A' + jarak +
    'Catatan Pembeli : ' + input_catatan + '%0A' + jarak +
    'Link Produk : ' + input_viaUrl + '%0A' + jarak + 
    '%0A-----------------------------%0A';
      
    /* URL Final Whatsapp */ 
var whatsapp_link = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
    'DATA SAYA ' +
    '%0A-----------------------------%0A' + '%0A' +
    'Nama : ' + input_nama + '%0A' +
    'No Hp : ' + input_nomor + '%0A' +
    'Email : ' + input_email + '%0A' +
    'Alamat : ' + input_alamat + '%0A' +
    'Metode Pembayaran : ' + input_pembayaran + '%0A' +
    '%0A-----------------------------%0A' + '%0A' +
    'DAFTAR BELANJAAN %0A' +
    '-----------------------------%0A' +
    'Nama Produk : ' + input_namaproduk + '%0A' +
    'Harga Produk : ' + input_harga + '%0A' +
    'Catatan Pembeli : ' + input_catatan + '%0A' +
    'Link Produk : ' + input_viaUrl + '%0A' +
    '%0A-----------------------------%0A';
 
     /* Buka Jendela Email dan Whatsapp  */ 
     $('#to_wa').attr('href',whatsapp_link).attr('target','_blank');
     $('#to_mail').attr('href',mail_link).attr('target','_blank');

     /* Kosongkan Semua Kolom Jika Terkirim */ 
     $('#namalengkap').val('');
     $('#nomorWA').val('');
     $('#email').val('');
     $('#pembayaran :selected').text('Pembayaran');
     $('#alamat').val('');
     $('#catatan').val('');
  }
};
//]]> 
