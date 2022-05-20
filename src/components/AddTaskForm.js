import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTask} from '../features/taskSlice';

const AddTaskForm = (props) => {
    const { setAddModal } = props;
    const dispatch = useDispatch ();

  return (
    <div>
        <Formik 
            initialValues={{
                taskName: "",
                taskTime: ""
            }}
            enableReinitialize={true}
            validate = {values => {
                const errors = {};
                if (!values.taskName) {
                    errors.taskName = 'Required';
                }
                if (!values.taskTime) {
                    errors.taskTime = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                dispatch(addTask({
                    id: uuidv4(),
                    taskName: values.taskName,
                    taskTime: values.taskTime
                }))
                setSubmitting(false);
                setAddModal(false);
                resetForm({values: ""});
            }}
        >
        {({isSubmitting}) =>  (
            <Form>
            <div className='grid grid-cols-5 gap-4'>
                <div className='col-span-5'>
                    <label htmlFor="taskName" className='text-sm text-gray-600'>Task Name</label>
                    <Field type="text"  name="taskName" className="form-control border border-gray-500 p-2 rounded-sm w-full" autoComplete="off" />
                    <ErrorMessage name="taskName" component="div" className="text-red-500" />
                </div>
                <div className='col-span-5'>
                    <label htmlFor="taskTime" className='text-sm text-gray-600'>Task Time</label>
                    <Field type="number" name="taskTime" className="form-control border border-gray-500 p-2 rounded-sm w-full" autoComplete="off" />
                    <ErrorMessage name="taskTime" component="div" className="text-red-500" />
                </div>
                <div className='col-span-5'>
                    <button type="submit" className="bg-emerald-500 p-2 rounded-md  hover:bg-emerald-600 text-white" disabled={isSubmitting}>
                        Submit
                    </button>
                </div>
            </div>
            </Form>
        )}
        </Formik>
    </div>
  )
}

export default AddTaskForm;