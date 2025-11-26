# 💻 **Frontend Interface — Branch Overview**

This branch adds the frontend interface for the **llmops-digital-twin** project. The focus is on building a chat UI for the Digital Twin, wiring it into the main page, and updating the Tailwind CSS v4 configuration so everything renders correctly in the browser.

## Part 1: Create the Twin Chat Component

### Step 1: Implement `Twin` in `frontend/components/twin.tsx`

Create a new file:

`frontend/components/twin.tsx`

This component:

* Manages the conversation state (`messages`) between the user and the assistant
* Sends user input to the backend `http://localhost:8000/chat`
* Displays responses from the Digital Twin
* Shows a loading/typing indicator while waiting for the backend
* Maintains a `sessionId` so that future branches can add memory support

Key elements of the component:

```tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

export default function Twin() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState<string>('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // scrollToBottom + useEffect to keep latest message in view
    // sendMessage() posts to the FastAPI /chat endpoint
    // handleKeyPress() sends on Enter (without Shift)
    // JSX: header, message list, loading dots, and input bar
}
```

The full implementation includes:

* A header with a `Bot` icon and title “AI Digital Twin”
* Empty-state prompt when no messages are present
* Distinct styling for user vs assistant messages
* A three-dot bounce animation to indicate loading
* An input bar with Enter-to-send and a `Send` icon button

## Part 2: Install UI Dependencies

### Step 2: Add `lucide-react` for Icons

From inside the `frontend` directory:

```bash
cd frontend
npm install lucide-react
cd ..
```

The `Twin` component uses:

* `Bot` — assistant avatar
* `User` — user avatar
* `Send` — send button icon

These icons help make the interface more readable and visually clear.

## Part 3: Wire the Twin into the Main Page

### Step 3: Update `frontend/app/page.tsx`

Replace the contents of `frontend/app/page.tsx` with a layout that hosts the chat UI:

```tsx
import Twin from '@/components/twin';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            AI in Production
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Deploy your Digital Twin to the cloud
          </p>

          <div className="h-[600px]">
            <Twin />
          </div>

          <footer className="mt-8 text-center text-sm text-gray-500">
            <p>Week 2: Building Your Digital Twin</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
```

This page:

* Provides the main heading and subheading
* Centres the content in a constrained width container
* Allocates a fixed height area for the chat UI
* Displays a simple footer describing the current week/module

## Part 4: Tailwind v4 and Global Styling

### Step 4: Configure PostCSS for Tailwind v4

Update `frontend/postcss.config.mjs`:

```js
export default {
    plugins: {
        '@tailwindcss/postcss': {},
    },
}
```

This ensures Tailwind v4 is processed correctly via PostCSS in the Next.js 15.5 setup.

### Step 5: Update Global Styles

Replace the contents of `frontend/app/globals.css`:

```css
@import 'tailwindcss';

/* Smooth scrolling animation keyframe */
@keyframes bounce {
  0%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 1.4s infinite;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}
```

These global styles:

* Import Tailwind’s layers
* Define the `bounce` animation used for the chat loading dots
* Provide utility classes for delay offsets (`delay-100`, `delay-200`)

## Frontend Structure After This Branch

After completing this branch, the key frontend files for the Digital Twin interface are:

```text
llmops-digital-twin/
├── frontend/
│   📁 app/
│   │   ├── page.tsx        # Main page hosting the Twin component
│   │   └── globals.css     # Tailwind v4 import + custom animations
│   📁 components/
│   │   └── twin.tsx        # Chat UI that talks to the FastAPI backend
│   └── postcss.config.mjs  # Tailwind v4 PostCSS configuration
└── backend/
    └── ...                 # Existing FastAPI Digital Twin API
```

The frontend is now fully connected to the backend and ready for deployment in later branches.
