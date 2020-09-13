const DataValidation = (values) => {
  const errors = {};

  if (!values.name || values.name === "") {
    errors.name = "Nama harus diisi";
  }

  if (!values.umur || values.umur === "") {
    errors.umur = "Umur harus diisi";
  }

  if (!values.alamat || values.alamat === "") {
    errors.alamat = "Alamat harus diisi";
  }

  if (!values.nohp || values.nohp === "") {
    errors.nohp = "No HP harus diisi";
  }

  return errors
};

export default DataValidation;
