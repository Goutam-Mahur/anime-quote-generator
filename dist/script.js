document.querySelector(".generate").addEventListener("click", async () => {
  const button = event.currentTarget;
  const originalText = button.textContent;

  button.textContent = "Loading...";

  try {
    const response = await fetch("/api/quotes/random");
    const data = await response.json();

    const anime = data.anime;
    const name = data.name;
    const quote = data.quote;
    const imageUrl = data.imageUrl;

    document.querySelector(".image img").setAttribute("src", imageUrl);
    document.querySelector(".quote").innerHTML = quote;
    document.querySelector(".name").innerHTML = `- by ${name}`;
    document.querySelector(".anime").innerHTML = anime;
  } catch (error) {
    console.log("Some error occurred", error);
  } finally {
    button.textContent = originalText;
  }
});
