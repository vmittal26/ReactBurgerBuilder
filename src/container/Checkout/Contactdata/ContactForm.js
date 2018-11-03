import React from 'react';
import { withFormik , Form , Field } from 'formik';
import * as yup from 'yup';

let onSubmit;

const contactForm = (props) => {
  onSubmit = props.onSubmit;
  const { errors ,touched } = props;
  const errorClassName = 'text-left text-danger text-uppercase';
  return(
    <Form className="form-group">
      <div>
          {touched.name && errors.name && <div className={errorClassName}>{errors.name}</div>}
          <Field type="text" name="name" className="form-control" placeholder="Name" />
      </div>
      <div>
          {touched.email &&errors.email && <div className={errorClassName}>{errors.email}</div>}
          <Field type="email" name="email" className="form-control" placeholder="Email" />
      </div>
      <div>
        {touched.address1 && errors.address1 && <div className={errorClassName}>{errors.address1}</div>}
        <Field type="text" name="address1" className="form-control" placeholder="Address Line1" />
      </div>
      <Field type="text" name="address2" className="form-control" placeholder="Address Line2" />
       <div>
        {touched.zip && errors.zip && <div className={errorClassName}>{errors.zip}</div>}
        <Field type="text" name="zip" className="form-control" placeholder="Zip Code" />
        </div>
      <button type="submit" className="button-primary mt-1"> Order </button>
    </Form>
  )
}

export default withFormik({
    mapPropsToValues(){
        return {
            name:'',
            email:'',
            address1:'',
            address2:'',
            zip:''
        }
    },
    validationSchema:yup.object().shape({
        name:yup.string().required(),
        email:yup.string().email().required(),
        address1:yup.string().required(),
        zip:yup.string().required()
    }),
    handleSubmit(values){
        onSubmit(values);
    }
})(contactForm);