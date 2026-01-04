# Email Setup Guide for Contact Form

## 📧 Setting Up Resend (Recommended - Free & Easy)

### Step 1: Install Resend Package
```bash
npm install resend
```

### Step 2: Create a Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (no credit card required)
3. Free plan includes: 100 emails/day, 3,000 emails/month

### Step 3: Get Your API Key
1. After signing in, go to **API Keys** in the dashboard
2. Click **Create API Key**
3. Give it a name (e.g., "AGP Contact Form")
4. Copy the API key (it starts with `re_`)

### Step 4: Add API Key to Environment Variables
Create a `.env.local` file in your project root:

```env
RESEND_API_KEY=re_your_api_key_here
```

**Important:** Add `.env.local` to your `.gitignore` file to keep your API key secret!

### Step 5: Create the API Route
Create the file: `app/api/contact/route.ts`

Copy the code from the "app/api/contact/route.ts" artifact I provided above.

### Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out the form and submit
4. Check your email: **montymhango01@gmail.com**

---

## 🎨 Email Template Features

The email you'll receive includes:
- ✅ Professional design with gradients
- ✅ Contact information (name, business, email, phone)
- ✅ Request details (category, budget)
- ✅ Items needed (formatted with line breaks)
- ✅ Timestamp (Malawi timezone)
- ✅ Reply-to set to customer's email for easy responses

---

## 🚀 Alternative: Use Your Own Domain (Optional)

If you want emails to come from your own domain (e.g., `contact@yourcompany.com`):

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Follow DNS setup instructions
4. Update the `from` field in `route.ts`:
```typescript
from: 'Contact Form <contact@yourdomain.com>',
```

---

## 🔧 Troubleshooting

### Form doesn't submit
- Check browser console for errors
- Ensure `.env.local` file is in project root
- Restart development server after adding env variables

### Email not received
- Check spam folder
- Verify API key is correct
- Check Resend dashboard for logs
- Ensure you're using the correct email in the code

### "RESEND_API_KEY is not defined" error
- Make sure `.env.local` exists
- Restart your dev server: `npm run dev`
- Check file is named exactly `.env.local` (not `.env`)

---

## 📱 Testing Checklist

✅ Required fields validation works  
✅ Email format validation works  
✅ Submit button shows loading state  
✅ Success message appears after submission  
✅ Form clears after successful submission  
✅ Error message appears if submission fails  
✅ Email received in inbox  
✅ Email formatting looks good  
✅ Reply-to email is correct  

---

## 🌐 Production Deployment

When deploying to Vercel/Netlify/etc.:

1. Add environment variable in hosting dashboard:
   - Key: `RESEND_API_KEY`
   - Value: `re_your_api_key_here`

2. Redeploy your application

3. Test the live form

---

## 💡 Pro Tips

1. **Rate Limiting**: Consider adding rate limiting to prevent spam
2. **Honeypot Field**: Add a hidden field to catch bots
3. **Email Notifications**: Set up auto-reply to customers
4. **Database**: Store submissions in a database for backup
5. **Analytics**: Track form submissions with Google Analytics

---

## 📞 Need Help?

If you encounter any issues:
1. Check Resend logs in their dashboard
2. Check your browser's Network tab for API errors
3. Review server logs for error messages

Your form is now ready to receive quotation requests! 🎉