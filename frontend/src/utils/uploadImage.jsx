const uploadImage = async (imgFile) => {
  const apiKey = "49f2ffd7f8c5d17d8d15cb23e60e4053";

  if (imgFile) {
    const formData = new FormData();
    formData.append("image", imgFile);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Gagal mengunggah gambar");
      }

      const data = await response.json();
      return data.data.url;
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("Pilih gambar terlebih dahulu.");
  }
};

export default uploadImage;
