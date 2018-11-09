import * as yup from 'yup';

const schema = values =>
  yup.object().shape({
    name: yup.string().required("Please enter a project name"),
    price: yup.number(),
    status: yup.string(),
    start_date: yup.date().isRequired("Please enter a valid starting date").default(() => { return new Date }),
    end_date: yup.date()
  })

export default schema;
