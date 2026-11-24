DROP POLICY IF EXISTS "Site assets readable by all" ON storage.objects;
DROP POLICY IF EXISTS "Public can view project images" ON storage.objects;

CREATE POLICY "Owners can read site assets"
  ON storage.objects FOR SELECT TO authenticated
  USING (bucket_id = 'site-assets' AND owner_id = (SELECT auth.uid()::text));

CREATE POLICY "Owners can read project images"
  ON storage.objects FOR SELECT TO authenticated
  USING (bucket_id = 'project-images' AND owner_id = (SELECT auth.uid()::text));