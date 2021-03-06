import * as yup from 'yup';

const schema = values =>
  yup.object().shape({
    name: yup.string().required("Please enter a project name"),
    price: yup.number(),
    status: yup.string(),
    start_date: yup.date().required("Please enter a valid starting date").default(() => { return new Date }),
    end_date: yup.date().default(() => { return new Date })
  })

export default schema;
