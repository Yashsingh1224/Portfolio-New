import React from 'react';
import { MessageSquareCode, User } from 'lucide-react';
import { reviews } from '../constants';

const ReviewCard = ({ review }) => (
    <div className="w-80 flex-shrink-0 bg-white dark:bg-dark-card p-6 rounded-lg border border-gray-200 dark:border-dark-border hover:border-primary/50 transition-colors shadow-sm relative group/card">
        <div className="absolute top-0 right-0 w-8 h-8 bg-primary/5 rounded-bl-2xl -mr-px -mt-px group-hover/card:bg-primary/20 transition-colors" />

        <div className="flex items-start gap-4 mb-4">
            <div className="w-10 h-10 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0 text-primary">
                <User size={20} />
            </div>
            <div className="overflow-hidden">
                <h4 className="font-bold text-gray-900 dark:text-white truncate">{review.name}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-mono truncate">
                    {review.role}
                </p>
            </div>
        </div>

        <div className="relative">
            <MessageSquareCode className="absolute -top-1 -left-1 text-primary/20 w-4 h-4" />
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-5 font-mono">
                {review.content}
            </p>
        </div>
    </div>
);

const Testimonials = () => {
    return (
        <section className="py-24 bg-gray-50 dark:bg-dark-bg/50 overflow-hidden relative border-y border-gray-200 dark:border-dark-border">

            <div className="px-6 lg:px-20 mb-10 flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        System <span className="text-primary">Feedback</span>
                    </h2>
                    <p className="text-xs font-mono text-gray-500 mt-1">// user_interaction_logs</p>
                </div>
            </div>

            <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] group">

                {/* FIX APPLIED: Added 'pr-6' to all three tracks.
           This padding acts as the "gap" between the end of this track and the start of the next one.
        */}

                {/* TRACK 1 */}
                <div className="flex gap-6 pr-6 py-4 animate-infinite-scroll group-hover:[animation-play-state:paused]">
                    {reviews.map((review, index) => (
                        <ReviewCard key={`original-${index}`} review={review} />
                    ))}
                </div>

                {/* TRACK 2 */}
                <div className="flex gap-6 pr-6 py-4 animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
                    {reviews.map((review, index) => (
                        <ReviewCard key={`duplicate-${index}`} review={review} />
                    ))}
                </div>

                {/* TRACK 3 */}
                <div className="flex gap-6 pr-6 py-4 animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
                    {reviews.map((review, index) => (
                        <ReviewCard key={`safety-${index}`} review={review} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;