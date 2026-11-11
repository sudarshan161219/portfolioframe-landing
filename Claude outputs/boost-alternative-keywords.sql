-- Run in Neon SQL Editor (database: seo).
-- Search Console shows competitor queries (carbon, screely, shots.so, ray.so) bring most impressions.
-- This adds the missing "alternative" posts and pushes them to the front of the queue.

INSERT INTO keywords (keyword, pillar, intent, post_type, priority, product, notes) VALUES
('screely alternative',            'screenshot-mockups', 'comparison', 'comparison', 95, 'portfolio-frame', 'Search Console: "screely" and "screely app" get impressions. Fair list of 7 tools, link to /vs/screely.'),
('shots.so alternative',           'screenshot-mockups', 'comparison', 'comparison', 94, 'portfolio-frame', 'Search Console: "shots so", "shot.so", "shots.so" get impressions. Link to /vs/shots-so.'),
('remove.bg alternative free',     'background-removal',  'comparison', 'comparison', 92, 'cutout',          'Search Console: Cutout queries already show. Local, free, no upload, no credits.')
ON CONFLICT (keyword) DO UPDATE SET priority = EXCLUDED.priority, notes = EXCLUDED.notes;

-- Check the next posts the workflow will write
SELECT keyword, product, post_type, priority, status FROM keywords
WHERE status = 'queued' ORDER BY priority DESC, id LIMIT 6;
