import axios from "axios";
import { useState } from "react"



export default function Iframe({onClose, onSuccess }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        jobType: '',
        jobSource: '',
        jobDescription: '',
        address: '',
        city: '',
        state: '',
        index: '',
        serviceInput2: '',
        scheduledDate: '',
        startTime: '',
        endTime: '',
        technical: '',
    });

    const [isLoading, setIsLoading] = useState(false);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
       
        const dealData = {
            title: `Сделка ${formData.firstName} ${formData.lastName}`,
            person_id: null,
            '9bfcac7a7856b31ba27013c43599308cb5a8cbe0': formData.jobType,
            '8406aaef7011bbf74cac1ab0249e6aea91b80f77': formData.jobSource,
            '2244c4c669ec75f649909b9a399caf3fee4a2400': formData.jobDescription,
            '1f2ba5393820756b9157fcc0cfc999c96c65a550': formData.address,
            '0585130712d2d202db106be81b890a283adcd4ee': formData.city,
            '8cfa2675d3dc78952ce7c7adb732e3a7625f720e': formData.state,
            '5091d195d8628fb6cfc0a660e0bcb851d34902f4': formData.index,
            'b7ff2cc1bf72eb066a3a529fe03baa6e116cb9e8': formData.serviceInput2,
            '1761a66a7c055755f8d703d80d6d4e188ae5b4ff': formData.scheduledDate,
            'c79e66e957c6a9d3b0d46ece988d069eebbe2a3d': formData.startTime,
            'ad4ee90d69540944209cb49ed241e649ed4af902': formData.endTime,
            '5265684605740d27707a7633ceab854af648cee9': formData.technical
        };
        const personData = {
            name: `${formData.firstName} ${formData.lastName}`,
            phone: formData.phone,
            email: formData.email,
        }
       
        try {
            const personResponse = await axios.post('https://api.pipedrive.com/v1/persons?api_token=7cc57d2ff226823d401891e5ff2c8147623d4251', personData);
            const personId = personResponse.data.id; 

        dealData.person_id = personId;

        const dealResponse = await axios.post('https://api.pipedrive.com/v1/deals?api_token=7cc57d2ff226823d401891e5ff2c8147623d4251', dealData);
        
        const dealId = dealResponse.data.data.id;
        onSuccess(dealId)

        setTimeout(() => {
            setIsLoading(false);
            onSuccess();
        }, 2000);




        console.log('Успех:', dealResponse.data);
    } catch (error) {
        console.error('Ошибка: ', error.response ? error.response.data : error.message);
    };


}

    return (
        <div className="iframe_overlay">
            <div className="frame_header">
                <h1>NEW Create a job</h1>
                <button onClick={onClose}>Х</button>
            </div>
            <div className="iframe_content">
                <div className="top_forms" onSubmit={handleSubmit}>
                    <div className="form_1">
                        <h1>Client details</h1>
                        <div className="top_inputs">
                            <input type="text" placeholder="First name" name="firstName" value={formData.firstName} onChange={handleChange}/>
                            <input type="text" placeholder="Last name"  name="lastName" value={formData.lastName} onChange={handleChange}/>
                        </div>
                        <input type="tel" name="phone" placeholder="(233)333-4455" value={formData.phone} onChange={handleChange} />
                        <input type="email" name="email" placeholder="test@test.test" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form_2">
                        <h1>Job type</h1>
                        <input type="text" name="jobType" placeholder="Select job type" value={formData.jobType} onChange={handleChange} />
                        <input type="text" name="jobSource" placeholder="Job source" value={formData.jobSource} onChange={handleChange} />
                        <textarea 
                        type="text" 
                        name="jobDescription" 
                        placeholder="Job description(optional)" 
                        value={formData.jobDescription} 
                        onChange={handleChange}
                        style={{height: '120px', textAlign:'left'}}
                        />
                    </div>
                </div>
                <div className="bottom_forms">
                    <div className="form_3">
                        <h1>Service location</h1>
                        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
                        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
                        <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
                        <div className="service_bot_inputs">
                            <input type="text" name="index" value={formData.index} onChange={handleChange} />
                            <input type="text" name="serviceInput2" value={formData.serviceInput2} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form_4">
                        <h1>Scheduled</h1>
                        <input type="date" name="scheduledDate" value={formData.scheduledDate} onChange={handleChange} />
                        <div className="middle_time_inputs">
                            <input type="time" name="startTime" value={formData.startTime} onChange={handleChange} />
                            <input type="time" name="endTime" value={formData.endTime} onChange={handleChange} />
                        </div>
                        <input type="text" name="technical" placeholder="Select technical" value={formData.technical} onChange={handleChange} />
                    </div>
                </div>
                <div className="buttons">
                    <button 
                    type="submit" 
                    onClick={handleSubmit}
                    className="submit_btn"
                    style={{backgroundColor: isLoading ? 'red' : 'yellow'}}
                    disabled = {isLoading}
                    >
                        {isLoading ? 'Request is sent' : 'Create job'}
                        </button>
                    <button className="save_btn">Save info</button>
        </div>
        </div>
        
        </div>        
    )
};
