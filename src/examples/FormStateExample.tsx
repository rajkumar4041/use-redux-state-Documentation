import { useReduxState, useReduxStateSelector } from 'redux-toolkit-state';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  gender: 'male' | 'female' | 'other' | '';
  interests: string[];
  newsletter: boolean;
  terms: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  age?: string;
  gender?: string;
  interests?: string;
  terms?: string;
}

const FormStateExample = () => {
  const [formData, setFormData, { update }] = useReduxState<FormData>('form-data', {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: 0,
    gender: '',
    interests: [],
    newsletter: false,
    terms: false,
  });

  const [errors, setErrors] = useReduxState<FormErrors>('form-errors', {});
  const [isSubmitted, setIsSubmitted] = useReduxState<boolean>('form-submitted', false);

  // Selectors for derived state
  const isFormValid = useReduxStateSelector<boolean, FormData>('form-data', (formData: any) => {
    return (
      formData.firstName.length > 0 &&
      formData.lastName.length > 0 &&
      formData.email.includes('@') &&
      formData.age >= 18 &&
      formData.gender !== '' &&
      formData.terms
    );
  });

  const formProgress = useReduxStateSelector<number, any>('form-data', (formData: any) => {
    const fields = [
      'firstName',
      'lastName',
      'email',
      'phone',
      'age',
      'gender',
      'interests',
      'terms',
    ];
    const completedFields = fields.filter((field) => {
      const value = formData[field as keyof FormData];
      if (Array.isArray(value)) return value.length > 0;
      if (typeof value === 'boolean') return value;
      return value && value.toString().length > 0;
    }).length;
    return Math.round((completedFields / fields.length) * 100);
  });

  const handleInputChange = (field: keyof FormData, value: any) => {
    update({ [field]: value });
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const handleInterestToggle = (interest: string) => {
    const currentInterests = formData.interests;
    const newInterests = currentInterests.includes(interest)
      ? currentInterests.filter((i) => i !== interest)
      : [...currentInterests, interest];
    update({ interests: newInterests });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email';
    }

    if (formData.age < 18) {
      newErrors.age = 'You must be at least 18 years old';
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select a gender';
    }

    if (!formData.terms) {
      newErrors.terms = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      console.log('Form submitted:', formData);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      age: 0,
      gender: '',
      interests: [],
      newsletter: false,
      terms: false,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="example-container">
        <h2>Form State Management</h2>
        <div className="success-message">
          <h3>✅ Form Submitted Successfully!</h3>
          <div className="submitted-data">
            <h4>Submitted Data:</h4>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </div>
          <button onClick={resetForm}>Submit Another Form</button>
        </div>
      </div>
    );
  }

  return (
    <div className="example-container">
      <h2>Form State Management</h2>
      <p className="description">
        Managing complex form state with validation, real-time updates, and progress tracking.
        Demonstrates how to handle form data efficiently.
      </p>

      <div className="demo-section">
        <div className="form-progress">
          <h3>Form Progress: {formProgress}%</h3>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${formProgress}%` }}></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className={errors.firstName ? 'error' : ''}
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className={errors.lastName ? 'error' : ''}
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="age">Age *</label>
              <input
                type="number"
                id="age"
                value={formData.age || ''}
                onChange={(e) => handleInputChange('age', parseInt(e.target.value) || 0)}
                className={errors.age ? 'error' : ''}
              />
              {errors.age && <span className="error-message">{errors.age}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender *</label>
              <select
                id="gender"
                value={formData.gender}
                onChange={(e) => handleInputChange('gender', e.target.value)}
                className={errors.gender ? 'error' : ''}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <span className="error-message">{errors.gender}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Interests</label>
            <div className="checkbox-group">
              {['Technology', 'Sports', 'Music', 'Reading', 'Travel'].map((interest) => (
                <label key={interest} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={() => handleInterestToggle(interest)}
                  />
                  {interest}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.newsletter}
                onChange={(e) => handleInputChange('newsletter', e.target.checked)}
              />
              Subscribe to newsletter
            </label>
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.terms}
                onChange={(e) => handleInputChange('terms', e.target.checked)}
                className={errors.terms ? 'error' : ''}
              />
              I accept the terms and conditions *
            </label>
            {errors.terms && <span className="error-message">{errors.terms}</span>}
          </div>

          <div className="form-actions">
            <button type="button" onClick={resetForm}>
              Reset
            </button>
            <button type="submit" disabled={!isFormValid}>
              Submit Form
            </button>
          </div>
        </form>
      </div>

      <div className="code-section">
        <h3>Code</h3>
        <pre>
          <code>{`interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  gender: 'male' | 'female' | 'other' | '';
  interests: string[];
  newsletter: boolean;
  terms: boolean;
}

const FormStateExample = () => {
  const [formData, setFormData, { update }] = useReduxState<FormData>('form-data', {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: 0,
    gender: '',
    interests: [],
    newsletter: false,
    terms: false,
  });

  // Derived state with selectors
  const isFormValid = useReduxStateSelector<boolean, FormData>('form-data', (formData) => {
    return formData.firstName.length > 0 &&
           formData.lastName.length > 0 &&
           formData.email.includes('@') &&
           formData.age >= 18 &&
           formData.gender !== '' &&
           formData.terms;
  });

  const formProgress = useReduxStateSelector<number, FormData>('form-data', (formData) => {
    const fields = ['firstName', 'lastName', 'email', 'phone', 'age', 'gender', 'interests', 'terms'];
    const completedFields = fields.filter(field => {
      const value = formData[field as keyof FormData];
      if (Array.isArray(value)) return value.length > 0;
      if (typeof value === 'boolean') return value;
      return value && value.toString().length > 0;
    }).length;
    return Math.round((completedFields / fields.length) * 100);
  });

  const handleInputChange = (field: keyof FormData, value: any) => {
    update({ [field]: value });
  };
};`}</code>
        </pre>
      </div>

      <div className="features">
        <h3>Key Features Demonstrated</h3>
        <ul>
          <li>Complex form state management with multiple field types</li>
          <li>Real-time form validation and error handling</li>
          <li>Form progress tracking with selectors</li>
          <li>Partial state updates with update method</li>
          <li>Type-safe form data handling</li>
          <li>Derived state for form validation and progress</li>
        </ul>
      </div>
    </div>
  );
};

export default FormStateExample;
