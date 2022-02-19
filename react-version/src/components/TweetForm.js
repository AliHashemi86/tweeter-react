function TweetForm(){
  const ask = "What are you humming about?"
  const submitButton=(e)=> {
    e.preventDefault();
  }
  const submitForm = (e)=> {
    e.preventDefault();
  }

  return (
    <section class="newtweet">
      <form method="post" action="/tweets" class="newtweet__form">
        <textarea class="form__textarea" name="text" placeholder={ask}></textarea>
        <input type="submit" value="Tweet" class="form__input" 
        onClick={(e)=> submitButton(e)}
        onSubmit={(e)=> submitForm(e)}
        />
        <span class="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;