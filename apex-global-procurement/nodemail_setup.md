# Nodemailer Setup Guide (Using Gmail)

## 📧 Setup Steps

### Step 1: Install Nodemailer
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### Step 2: Create Gmail App Password

Since you're using `montymhango01@gmail.com`, you need to create an App Password:

1. **Go to Google Account Settings:**
   - Visit: https://myaccount.google.com/
   - Sign in with `montymhango01@gmail.com`

2. **Enable 2-Factor Authentication (if not already enabled):**
   - Go to: https://myaccount.google.com/security
   - Click on "2-Step Verification"
   - Follow the steps to enable it

3. **Create App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" as the app
   - Select "Other (Custom name)" as the device
   - Type: "AGP Contact Form"
   - Click "Generate"
   - **Copy the 16-character password** (e.g., `abcd efgh ijkl mnop`)

### Step 3: Add to Environment Variables

Create or update `.env.local` in your project root:

```env
EMAIL_USER=montymhango01@gmail.com
EMAIL_APP_PASSWORD=your_16_character_app_password_here
```

**Important Notes:**
- Remove spaces from the app password
- Keep this file secret (add to `.gitignore`)
- Never commit `.env.local` to Git

### Step 4: Restart Development Server

```bash
npm run dev
```

### Step 5: Test the Form!

1. Go to your contact form
2. Fill out all fields
3. Click "Request Quote"
4. Check `montymhango01@gmail.com` inbox

---

## ✅ Advantages of Nodemailer

- ✅ No API key service needed
- ✅ Free (uses your Gmail)
- ✅ Unlimited emails
- ✅ Full control
- ✅ Works immediately

## ⚠️ Disadvantages

- ⚠️ Requires Gmail app password setup
- ⚠️ Gmail has sending limits (500/day)
- ⚠️ Might go to spam initially

---

## 🔧 Troubleshooting

### "Invalid login" error
- Make sure 2FA is enabled on your Google account
- Create a new App Password
- Copy it exactly (remove spaces)
- Restart your dev server

### Emails going to spam
- Gmail might flag first few emails as spam
- Mark them as "Not Spam"
- After a few emails, they should go to inbox

### Environment variables not working
- File must be named `.env.local` exactly
- Must be in project root folder
- Restart dev server after adding variables

---

## 📱 Testing Checklist

Before going live:

- [ ] App password created
- [ ] `.env.local` file created with correct values
- [ ] Development server restarted
- [ ] Form submits without errors
- [ ] Email received in inbox
- [ ] Reply-to works (email shows customer's email)
- [ ] All form fields appear in email
- [ ] Email looks good on mobile

---

## 🌐 Production Deployment (Vercel/Netlify)

1. **Add Environment Variables in Hosting Dashboard:**
   ```
   EMAIL_USER=montymhango01@gmail.com
   EMAIL_APP_PASSWORD=your_app_password
   ```

2. **Deploy your site**

3. **Test the live form**

---

## 🎯 Which Option Should You Choose?

### Choose **Resend** if:
- ✅ You want the easiest setup
- ✅ You don't want to use personal Gmail
- ✅ You want professional "from" addresses later
- ✅ Free tier (100 emails/day) is enough

### Choose **Nodemailer** if:
- ✅ You already have Gmail
- ✅ You don't want external services
- ✅ You need more than 100 emails/day
- ✅ You're comfortable with Gmail settings

---

## 🚀 Quick Start Commands

```bash
# Option 1: Resend (Easiest)
npm install resend

# Option 2: Nodemailer (No external service)
npm install nodemailer
npm install --save-dev @types/nodemailer
```

Then create `.env.local` and add your credentials!

---

## 💡 Pro Tip

For production, I recommend **Resend** because:
- Professional appearance
- Better deliverability
- Detailed logs
- No Gmail rate limits
- Can use custom domain

But for testing and small projects, **Nodemailer** works great! 🎉