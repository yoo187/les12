$(document).ready(function() {
    $("#contentDiv").click(function() {
        var url = "content12.html";
        
        $.ajax({
            url: url,
            type: 'GET',
            success: function(data) {
                $("#contentDiv").html(data);
                alert("Content loaded successfully!");
            },
            error: function(xhr, status, error) {
                $("#contentDiv").html("Sorry, there was an error: " + xhr.status + " " + xhr.statusText);
            }
        });
    });
});
