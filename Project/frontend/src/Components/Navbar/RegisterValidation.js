import * as yup from "yup";
const validations = yup.object().shape({
      name: yup
            .string()
            .min(5, "isminiz en az 5 karakter olmalıdır.")
            .required("Zorunlu alan."),
      userName: yup
            .string()
            .min(5, "username en az 5 karakter olmalıdır.")
            .required("Zorunlu alan."),
      email: yup
            .string()
            .email("Geçerli bir email girin.")
            .required("Zorunlu alan."),
      password: yup
            .string()
            .min(5, "Parolanız en az 5 karakter olmalıdır.")
            .required("Zorunlu alan."),
});
export default validations;
