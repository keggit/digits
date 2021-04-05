import React from 'react';
import { Segment } from 'semantic-ui-react';
import { AutoForm, ErrorsField, HiddenField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { PropTypes } from 'prop-types';
import { Notes } from '../../api/note/Notes';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  note: String,
  contactId: String,
  owner: String,
  createdAt: Date,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddNote extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { note, contactId, createdAt, owner } = data;
    Notes.collection.insert({ note, contactId, createdAt, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      });
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  render() {
    let fRef = null;
    return (
      <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
        <Segment>
          <TextField label="Add a timestamped note" name='note'/>
          <SubmitField value='Submit'/>
          <ErrorsField/>
          <HiddenField name='owner' value={this.props.owner}/>
          <HiddenField name='contactId' value={this.props.contactId}/>
          <HiddenField name='createdAt' value={new Date()}/>
        </Segment>
      </AutoForm>
    );
  }
}

AddNote.propTypes = {
  owner: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};

export default AddNote;
