jQuery(document).ready(function($) {
    // Track klik pada link WhatsApp
    $('a[href*="wa.me"]').on('click', function(e) {
        // Cari agen ID dari link atau atribut data
        var agenId = findAgenIdFromLink(this);
        
        if (agenId) {
            // Kirim data tracking via AJAX
            $.ajax({
                url: agenTracking.ajax_url,
                type: 'POST',
                data: {
                    action: 'track_wa_click',
                    post_id: agenId,
                    nonce: agenTracking.nonce
                },
                success: function(response) {
                    console.log('Tracking successful:', response);
                    
                    // Hapus cookie lokal
                    document.cookie = "current_agen_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    
                    // Redirect ke WhatsApp setelah tracking
                    // Biarkan link default berjalan
                },
                error: function(error) {
                    console.log('Tracking error:', error);
                    // Tetap lanjutkan ke WhatsApp meski tracking gagal
                }
            });
        }
    });
    
    // Fungsi untuk mencari ID agen dari link
    function findAgenIdFromLink(linkElement) {
        var $link = $(linkElement);
        var href = $link.attr('href');
        
        // Coba ambil dari data attribute
        if ($link.data('agen-id')) {
            return $link.data('agen-id');
        }
        
        // Coba ambil dari parent element
        var $parent = $link.closest('[data-agen-id]');
        if ($parent.length && $parent.data('agen-id')) {
            return $parent.data('agen-id');
        }
        
        // Parse dari URL (jika ada parameter)
        var urlParams = new URLSearchParams(href.split('?')[1]);
        if (urlParams.has('agen_id')) {
            return urlParams.get('agen_id');
        }
        
        return null;
    }
});