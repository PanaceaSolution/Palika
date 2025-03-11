import React from 'react'
import FormHeader from '../components/FormComponents/FormHeader'
import FormTextInput from '../components/FormComponents/FormTextInput';
import Province from '../components/FormComponents/Province';
import LineBreak from '../components/linebreak';
import InputDatetime from '../components/FormComponents/InputDatetime';
import IssueDistrict from '../components/FormComponents/IssueDistrict';

const Newregistration = () => {
    const date = new Date().toLocaleDateString();
  return (
    <div className='h-[100%] bg-gray-200 flex flex-col items-center justify-around gap-6'>
        <h1 className='text-[#4472C4] text-center text-2xl font-medium padding-top-h1'>Application Form For New Registration</h1>
        <div className="form-container h-[95%] w-[95%] bg-white">
            <form action="">
                <div className="row-1 flex justify-around items-center">
                    <FormHeader label={"Certificate No. "} value={"PSN3301"}/>
                    <FormHeader label={"Fiscal Year "} value={"2025"}/>
                    <FormHeader label={"Registration Date"} value={date}/>
                </div>

                <div className="row-2">
                    <h1 className='text-[#4472C4] px-4 text-lg font-medium'>Business Form </h1>
                    <div className="form-field grid grid-cols-3">
                    <FormTextInput label={"Business Name"}/>
                    <FormTextInput label={"Business Type"}/>
                    </div>
                </div>

                <div className="row-3">
                <h1 className='text-[#4472C4] px-4 text-lg font-medium'>Business Location</h1>
                    <div className="form-field grid grid-cols-3">
                    <Province label={"Province"}/>
                    <FormTextInput label={"Municipality"}/>
                    <FormTextInput label={"Ward Number"}/>
                    <FormTextInput label={"Street"}/>
                    </div>
                </div>
                <LineBreak/>

                <div className="row-4 my-2">
                    <h1 className='text-[#4472C4] px-4 text-lg font-medium'>Landlord Details</h1>
                    <div className="form-field grid grid-cols-3">
                    <FormTextInput label={"First Name"}/>
                    <FormTextInput label={"Last Name"}/>
                    <FormTextInput label={"Address"}/>
                    <FormTextInput label={"Contact"}/>
                    </div>
                </div>

                <LineBreak/>

                <div className="row-5 my-2">
                    <h1 className='text-[#4472C4] px-4 text-lg font-medium'>Business Owner Details</h1>
                    <div className="form-field grid grid-cols-3">
                    <FormTextInput label={"First Name"}/>
                    <FormTextInput label={"Last Name"}/>
                    </div>
                </div>
                <div className="row-6 my-2">
                    <h1 className='text-[#4472C4] px-4 text-lg font-medium'>Address</h1>
                    <div className="form-field grid grid-cols-3">
                    <Province label={"Province"}/>
                    <FormTextInput label={"Metropolitan"}/>
                    <FormTextInput label={"Ward No"}/>
                    <FormTextInput label={"Street"}/>
                    </div>
                </div>
                <div className="row-7 my-2">
                    <h1 className='text-[#4472C4] px-4 text-lg font-medium'>Documents</h1>
                    <div className="form-field grid grid-cols-3">
                    <FormTextInput label={"Citizenship No."}/>
                    <InputDatetime label={"Issue Date"}/>
                    <IssueDistrict/>
                    <FormTextInput label={"NID"}/>
                    <InputDatetime label={"Issue Date"}/>
                    <IssueDistrict/>
                    </div>
                </div>
                <LineBreak/>
                <div className="row-8 my-2">
                    <h1 className='text-[#4472C4] px-4 text-lg font-medium'>Upload Documents</h1>
                    <div className="form-field grid grid-cols-3">
                        
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Newregistration
