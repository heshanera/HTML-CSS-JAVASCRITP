$(document).ready(function(){
    
    
    /*-------- headers ---------*/

    $('.drop-down-option').change(function() {
	    if ($(this).val() === 'header1') {
    		addElement("h1"); 
	    } else if ($(this).val() === 'header2') {
    		addElement("h2"); 
	    } else if ($(this).val() === 'header3') {
    		addElement("h3"); 
	    } else if ($(this).val() === 'header4') {
    		addElement("h4"); 
	    } else if ($(this).val() === 'header5') {
    		addElement("h5"); 
	    } else if ($(this).val() === 'header6') {
    		addElement("h6"); 
	    } else if ($(this).val() === 'normaltxt') {
    		addElement("p"); 
	    }
	});

    /*-------- font styles -----*/

    $(".bold").click(function(){
    	document.execCommand('bold');
	});

    $(".italic").click(function(){
    	document.execCommand('italic');
	});

	$(".underline").click(function(){
    	document.execCommand('underline');
	});

	/*-------- font alignments -----*/	

	$(".justify").click(function(){
    	$("#editor-text").removeClass("align-left align-right align-center").addClass("justify");
	});

	$(".align-left").click(function(){
    	$("#editor-text").removeClass("justify align-right align-center").addClass('align-left');
	});

	$(".align-right").click(function(){
    	$("#editor-text").removeClass("align-left justify align-center").addClass('align-right');
	});

	$(".align-center").click(function(){
    	$("#editor-text").removeClass("align-left align-right justify").addClass('align-center');
	});	

    /*----- unordered lists ---------*/

    $(".ulist").click(function(){
        addUnorderedList();
    });

	/*----- loading the content -----*/

	$(".edit-button").click(function(){
    	var text = $('.edit-this').html();
    	$('#editor-text').html(text);
	});	


	/*--- Saving the content --------*/

	$("#save-btn").click(function(){
    	var text = $('#editor-text').html(); 
    	$('.edit-this').html(text);
    	
    	$(".alert").removeClass('hide-saved-alert');
    	$(".alert").css("display", "block");
    	$(".alert").delay(2500).fadeOut(300);
    	//alert(text);

	});

    $('[data-toggle="tooltip"]').tooltip();  

});


function addElement(type) 
{
    var range = window.getSelection().getRangeAt(0);
    var selectionContents = range.extractContents();

    var headerType = document.createElement(type);
    headerType.appendChild(selectionContents);
    //headerType.setAttribute("class",type);
    range.insertNode(headerType);

    /*
    var range = window.getSelection().getRangeAt(0);
    var selectionContents = range.extractContents();
    
    var span = document.createElement("span");
    span.appendChild(selectionContents);
    span.setAttribute("class",type);

    //span.style.backgroundColor  = "red";
    //span.style.color            = "white";

    range.insertNode(span);
    */
}

function addUnorderedList() 
{
    var selectionContents, range;
    if (window.getSelection) {
        selectionContents = window.getSelection();
        if (selectionContents.getRangeAt && selectionContents.rangeCount) 
        {
            range = selectionContents.getRangeAt(0);

            var ul = document.createElement("ul")
            var li = document.createElement("li")

            ul.setAttribute("class","unordered-list");

            range.insertNode( ul );
            ul.appendChild( li );
        }
    }
}