$("document").ready(function(){
  $("#hide").click(function(){
      $(this).hide();
  });
  $("div#sortable").accordion({
    collapsible:true
  });
});
