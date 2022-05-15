$(document).ready(function(){
    console.log("jquery!!s");
    $('.show-card').click(function(){
      
        $('.container').append(`<div class="card-components">
        <div class="components">
            <input class="card-list-name" value="CardList" name="cardlist">
         
          <div></div>
          <button class="clear-data">Clear data</button>
          <span class="index">0</span>
        </div>
        <div class="form-conainer">
         <div class="multiple">
          <button class="remove-item">x</button>
          <form action="/add-card" method="POST" >
            <label for="title">Title</label>
            <input type="text" name="title" placeholder="Title..." />
            <label for="decription">Description</label>
            <textarea
              name="description"
              type="text"
              cols="3"
              rows="4"
              placeholder="description"
            ></textarea>
            <button type="submit">Add-card</button>
          </form>
        </div>
        </div>
        <div class="btn" id="bottom-btn">
          <button>+</button>
        </div>
      </div>`)
    })



    $('.clear-data').click(function(){
        $('.card-components').remove()

  $('.remove-item').click(function(){
      $('.frm').hide(this)
  })
    })
    $('.btn').click(function(){
        var index =0
        $('.form-conainer').append(` <div class="multiple">
            <button class="remove-item">x</button>
            <form action="/add-card" method="POST">
              <label for="title">Title</label>
              <input type="text" name="title" placeholder="Title..." />
              <label for="decription">Description</label>
              <textarea
                name="description"
                type="text"
                cols="3"
                rows="4"
                placeholder="description"
              ></textarea>
              <button type="submit">Add-card</button>
            </form>
          </div>`)
    })
})